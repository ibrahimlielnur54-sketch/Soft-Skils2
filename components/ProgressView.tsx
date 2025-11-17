import React from 'react';
import { SKILLS } from '../constants';

interface ProgressViewProps {
    completedSkills: Record<string, number>;
}

const ProgressView: React.FC<ProgressViewProps> = ({ completedSkills }) => {
    const completedCount = Object.keys(completedSkills).length;
    const totalSkills = SKILLS.length;
    const completedSkillDetails = SKILLS.filter(skill => completedSkills[skill.id] !== undefined);

    return (
        <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">İnkişaf Hesabatı</h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-lg font-semibold text-slate-700">Ümumi Baxış</h3>
                <p className="text-slate-600 mt-2">
                    Siz <span className="font-bold text-indigo-600">{totalSkills}</span> bacarıqdan <span className="font-bold text-indigo-600">{completedCount}</span>-ni tamamlamısınız.
                </p>
                <div className="w-full bg-slate-200 rounded-full h-4 mt-4">
                    <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all duration-500" 
                        style={{ width: `${(completedCount / totalSkills) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">Tamamlanmış Bacarıqlar</h3>
            {completedCount > 0 ? (
                <div className="space-y-4">
                    {completedSkillDetails.map(skill => {
                        const Icon = skill.icon;
                        const score = completedSkills[skill.id];
                        return (
                            <div key={skill.id} className="bg-white p-5 rounded-xl shadow-md flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-emerald-100 p-3 rounded-full">
                                        <Icon className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800">{skill.name}</h4>
                                        <p className="text-sm text-slate-500">Tamamlandı</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Xal</p>
                                    <p className="font-bold text-2xl text-indigo-600">{score}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <p className="text-slate-600">Hələ heç bir bacarıq tamamlanmayıb.</p>
                    <p className="text-slate-500 mt-2 text-sm">Başlamaq üçün "Bacarıqlar" səhifəsinə keçin!</p>
                </div>
            )}
        </div>
    );
};

export default ProgressView;
