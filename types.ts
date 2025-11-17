// FIX: Import React to use React.ComponentType
import type React from 'react';

export type Page = 'skills' | 'progress' | 'about';

export interface Choice {
  id: string;
  text: string;
}

export interface Scenario {
  id: string;
  text: string;
  choices: Choice[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  scenarios: Scenario[];
}

export interface GeminiFeedback {
  evaluation: 'Əla' | 'Yaxşı' | 'Zəif';
  feedback: string;
  suggestion: string;
}