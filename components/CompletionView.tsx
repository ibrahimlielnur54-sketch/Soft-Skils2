import React from 'react';
import type { Skill } from '../types';
import { TrophyIcon } from './icons/Icons';

interface CompletionViewProps {
  skill: Skill;
  score: number;
  onBackToSkills: () => void;
}

const CompletionView: React.FC<CompletionViewProps> = ({ skill, score, onBackToSkills }) => {
  return (
    <div className="max-w-2xl mx-auto text-center p-8 bg-white rounded-2xl shadow-xl animate-fade-in">
      <TrophyIcon className="w-24 h-24 text-amber-400 mx-auto" />
      <h2 className="text-3xl font-bold text-slate-800 mt-4">
        Təbriklər!
      </h2>
      <p className="text-slate-600 mt-2 text-lg">
        Siz <span className="font-bold text-indigo-600">"{skill.name}"</span> bacarığını uğurla tamamladınız.
      </p>
      <div className="mt-6 bg-slate-100 rounded-lg p-4 inline-block">
        <p className="text-slate-500 text-sm">TOPLAM XALINIZ</p>
        <p className="text-5xl font-bold text-indigo-600">{score}</p>
      </div>
      <div className="mt-8">
        <button
          onClick={onBackToSkills}
          className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Yeni bacarıq seç
        </button>
      </div>
    </div>
  );
};

export default CompletionView;