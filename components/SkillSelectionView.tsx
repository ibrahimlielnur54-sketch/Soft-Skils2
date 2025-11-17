import React from 'react';
import { SKILLS } from '../constants';
import SkillCard from './SkillCard';
import type { Skill } from '../types';

interface SkillSelectionViewProps {
    onSelectSkill: (skill: Skill) => void;
}

const SkillSelectionView: React.FC<SkillSelectionViewProps> = ({ onSelectSkill }) => {
    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-700 mb-8">
                Bir bacarıq seçin və məşqə başlayın
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} onSelect={onSelectSkill} />
                ))}
            </div>
      </div>
    );
};

export default SkillSelectionView;
