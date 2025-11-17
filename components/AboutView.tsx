import React from 'react';
import { LightBulbIcon } from './icons/Icons';

const AboutView: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
            <div className="flex items-center space-x-4 mb-6">
                 <div className="bg-purple-100 p-3 rounded-full">
                    <LightBulbIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Layihə Haqqında</h2>
            </div>
           
            <div className="space-y-6 text-slate-700">
                <p>
                    <strong>Soft Skills Gamified Coach</strong>, peşəkar və şəxsi inkişaf üçün vacib olan "yumşaq bacarıqları" (soft skills) inkişaf etdirmək üçün yaradılmış interaktiv bir platformadır. Bizim məqsədimiz, öyrənmə prosesini sıxıcı nəzəriyyədən uzaqlaşdırıb, real həyat ssenariləri ilə praktiki və əyləncəli bir təcrübəyə çevirməkdir.
                </p>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Necə İşləyir?</h3>
                    <p>
                        Tətbiqimiz gamifikasiya (oyunlaşdırma) metodundan istifadə edir. Siz müxtəlif bacarıqlar (məsələn, Ünsiyyət, Komanda İşi) seçirsiniz və hər bacarıq daxilində sizi sınaqdan keçirən ssenarilərlə qarşılaşırsınız. Verdiyiniz hər bir qərara anında, fərdiləşdirilmiş rəy alırsınız.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Texnologiyamız: Google Gemini</h3>
                    <p>
                        Bütün rəy və qiymətləndirmələr Google-un qabaqcıl süni intellekt modeli olan <strong>Gemini</strong> tərəfindən təmin edilir. Bu, sizə təkcə doğru və ya yanlış cavabları deyil, həm də seçimlərinizin arxasındakı səbəbləri anlamağa, güclü tərəflərinizi möhkəmləndirməyə və zəif yönlərinizi inkişaf etdirməyə kömək edən dərin və konstruktiv təhlillər təqdim edir.
                    </p>
                </div>

                 <p>
                    Öyrənməyə və özünüzün ən yaxşı versiyasına çevrilməyə davam edin!
                </p>
            </div>
        </div>
    );
};

export default AboutView;
