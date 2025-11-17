
import { GoogleGenAI, Type } from "@google/genai";
import type { Skill, Scenario, Choice, GeminiFeedback } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    evaluation: {
      type: Type.STRING,
      description: 'Qiymətləndirmə: "Əla", "Yaxşı", və ya "Zəif".',
    },
    feedback: {
      type: Type.STRING,
      description: 'Seçimin niyə yaxşı və ya pis olduğunu izah edən 2-3 cümləlik konstruktiv rəy.',
    },
    suggestion: {
      type: Type.STRING,
      description: 'Əgər seçim optimal deyilsə, daha yaxşı bir yanaşma üçün qısa bir təklif.',
    },
  },
  required: ['evaluation', 'feedback', 'suggestion'],
};

export const getFeedbackForChoice = async (
  skill: Skill,
  scenario: Scenario,
  choice: Choice
): Promise<GeminiFeedback | null> => {
  const prompt = `
    Sən "soft skills" üzrə peşəkar bir kouçsan. İstifadəçi bir bacarıq üzərində məşq edir.

    Bacarıq: "${skill.name}"

    Qarşılaşdığı ssenari:
    "${scenario.text}"

    Verilən seçimlər və istifadəçinin seçimi:
    ${scenario.choices.map((c, i) => `${i + 1}. ${c.text}`).join('\n')}
    
    İstifadəçinin seçimi: "${choice.text}"

    Zəhmət olmasa, bu seçimə Azərbaycan dilində rəy bildir. Rəy dəqiq JSON formatında olmalıdır. JSON-da üç xüsusiyyət olmalıdır:
    1. "evaluation": Tək sözlə qiymətləndirmə: "Əla", "Yaxşı", və ya "Zəif".
    2. "feedback": Seçimin niyə yaxşı və ya pis olduğunu izah edən 2-3 cümləlik konstruktiv rəy. Rəyin tonu həvəsləndirici olmalıdır.
    3. "suggestion": Əgər seçim optimal deyilsə, daha yaxşı bir yanaşma üçün qısa bir təklif. Əgər seçim əladırsa, bu möhkəmləndirici bir ifadə ola bilər.
    `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.5,
      },
    });

    const jsonText = response.text.trim();
    const feedback: GeminiFeedback = JSON.parse(jsonText);

    // Basic validation
    if (feedback && feedback.evaluation && feedback.feedback && feedback.suggestion) {
        return feedback;
    }
    console.error("Parsed feedback is missing properties:", feedback);
    return null;

  } catch (error) {
    console.error("Error fetching feedback from Gemini:", error);
    return null;
  }
};
