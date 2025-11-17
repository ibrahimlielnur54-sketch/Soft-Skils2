import React, { useState, useEffect } from 'react';
import type { Skill, Scenario, Choice, GeminiFeedback } from '../types';
import { getFeedbackForChoice } from '../services/geminiService';
import FeedbackCard from './FeedbackCard';
import { SpinnerIcon } from './icons/Icons';

interface ScenarioViewProps {
  skill: Skill;
  onBack: () => void;
  onComplete: (score: number) => void;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
    const percentage = total > 0 ? (current / total) * 100 : 0;
    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4">
            <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

const ScenarioView: React.FC<ScenarioViewProps> = ({ skill, onBack, onComplete }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [feedback, setFeedback] = useState<GeminiFeedback | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);

  const currentScenario: Scenario = skill.scenarios[currentScenarioIndex];

  useEffect(() => {
    // Reset state when skill changes
    setCurrentScenarioIndex(0);
    setSelectedChoice(null);
    setFeedback(null);
    setIsLoading(false);
    setScore(0);
  }, [skill]);


  const handleChoice = async (choice: Choice) => {
    if (isLoading || feedback) return;

    setSelectedChoice(choice);
    setIsLoading(true);
    const result = await getFeedbackForChoice(skill, currentScenario, choice);
    setFeedback(result);
    if(result) {
        if(result.evaluation === 'Əla') setScore(s => s + 20);
        if(result.evaluation === 'Yaxşı') setScore(s => s + 10);
    }
    setIsLoading(false);
  };

  const handleNext = () => {
    if (currentScenarioIndex < skill.scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setSelectedChoice(null);
      setFeedback(null);
    } else {
        // End of scenarios for this skill
        onComplete(score);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="text-indigo-600 hover:text-indigo-800 font-semibold transition">
                &larr; Bütün bacarıqlar
            </button>
            <div className="text-lg font-bold text-slate-700">
                Xal: <span className="text-indigo-600">{score}</span>
            </div>
        </div>
        
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <ProgressBar current={currentScenarioIndex + (feedback ? 1 : 0)} total={skill.scenarios.length} />
            
            <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">{skill.name}</h2>
                <p className="text-md sm:text-lg text-slate-600">{currentScenario.text}</p>
            </div>

            <div className="space-y-3">
            {currentScenario.choices.map((choice) => (
                <button
                key={choice.id}
                onClick={() => handleChoice(choice)}
                disabled={!!feedback || isLoading}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                    ${ selectedChoice?.id === choice.id 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-slate-200 hover:border-indigo-400 hover:bg-indigo-50'
                    }
                    ${ (!!feedback || isLoading) ? 'cursor-not-allowed opacity-70' : '' }
                `}
                >
                {choice.text}
                </button>
            ))}
            </div>

            {isLoading && (
                <div className="flex justify-center items-center mt-6 text-slate-500">
                    <SpinnerIcon className="w-8 h-8 animate-spin mr-3" />
                    Rəy hazırlanır...
                </div>
            )}

            {feedback && (
                <div className="mt-6 animate-fade-in">
                    <FeedbackCard feedback={feedback} />
                    <button
                        onClick={handleNext}
                        className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {currentScenarioIndex < skill.scenarios.length - 1 ? 'Növbəti Ssenari' : 'Bacarığı Bitir'}
                    </button>
                </div>
            )}
      </div>
    </div>
  );
};

export default ScenarioView;