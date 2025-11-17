import React, { useState, useEffect } from 'react';
import { SKILLS } from './constants';
import type { Skill, Page } from './types';
import Header from './components/Header';
import ScenarioView from './components/ScenarioView';
import CompletionView from './components/CompletionView';
import ProgressView from './components/ProgressView';
import AboutView from './components/AboutView';
import SkillSelectionView from './components/SkillSelectionView';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('skills');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [completedSkillInfo, setCompletedSkillInfo] = useState<{ skill: Skill; score: number } | null>(null);

  // Load completed skills from localStorage on initial render
  const [completedSkills, setCompletedSkills] = useState<Record<string, number>>(() => {
    try {
      const savedProgress = localStorage.getItem('softSkillsProgress');
      return savedProgress ? JSON.parse(savedProgress) : {};
    } catch (error) {
      console.error("Could not parse saved progress:", error);
      return {};
    }
  });

  // Save completed skills to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('softSkillsProgress', JSON.stringify(completedSkills));
    } catch (error) {
      console.error("Could not save progress:", error);
    }
  }, [completedSkills]);


  const handleSelectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
    setCompletedSkillInfo(null);
  };

  const handleBackToSkills = () => {
    setSelectedSkill(null);
    setCompletedSkillInfo(null);
    setCurrentPage('skills');
  };

  const handleCompleteSkill = (score: number) => {
    if (selectedSkill) {
      setCompletedSkillInfo({ skill: selectedSkill, score });
      setCompletedSkills(prev => ({ ...prev, [selectedSkill.id]: score }));
      setSelectedSkill(null);
    }
  };

  const renderContent = () => {
    if (completedSkillInfo) {
      return (
        <CompletionView
          skill={completedSkillInfo.skill}
          score={completedSkillInfo.score}
          onBackToSkills={handleBackToSkills}
        />
      );
    }

    if (selectedSkill) {
      return (
        <ScenarioView
          skill={selectedSkill}
          onBack={handleBackToSkills}
          onComplete={handleCompleteSkill}
        />
      );
    }

    switch (currentPage) {
        case 'progress':
            return <ProgressView completedSkills={completedSkills} />;
        case 'about':
            return <AboutView />;
        case 'skills':
        default:
            return <SkillSelectionView onSelectSkill={handleSelectSkill} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
       <footer className="text-center p-4 mt-8 text-sm text-slate-500">
        <p>&copy; 2024 Soft Skills Gamified Coach. Powered by Gemini.</p>
      </footer>
    </div>
  );
};

export default App;