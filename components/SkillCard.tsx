import React from 'react';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  onSelect: (skill: Skill) => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, onSelect }) => {
  const Icon = skill.icon;

  return (
    <div
      onClick={() => onSelect(skill)}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2 flex flex-col justify-between"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
                <Icon className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800">{skill.name}</h3>
            </div>
        </div>
        <p className="mt-4 text-slate-600">{skill.description}</p>
      </div>
      <div className="px-6 pb-4">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
          {skill.scenarios.length} Ssenari
        </span>
      </div>
       <div className="bg-indigo-500 h-2"></div>
    </div>
  );
};

export default SkillCard;