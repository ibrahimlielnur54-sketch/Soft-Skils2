import React from 'react';
import type { GeminiFeedback } from '../types';
// FIX: Corrected typo from LightbulbIcon to LightBulbIcon to match the exported component name.
import { CheckIcon, LightBulbIcon, XCircleIcon } from './icons/Icons';

interface FeedbackCardProps {
  feedback: GeminiFeedback;
}

const evaluationStyles = {
    'Əla': {
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-500',
        textColor: 'text-emerald-700',
        icon: <CheckIcon className="w-6 h-6 text-emerald-600" />
    },
    'Yaxşı': {
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-500',
        textColor: 'text-sky-700',
        icon: <LightBulbIcon className="w-6 h-6 text-sky-600" />
    },
    'Zəif': {
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-500',
        textColor: 'text-amber-700',
        icon: <XCircleIcon className="w-6 h-6 text-amber-600" />
    }
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const styles = evaluationStyles[feedback.evaluation] || evaluationStyles['Yaxşı'];

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${styles.bgColor} ${styles.borderColor}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {styles.icon}
        </div>
        <div>
          <h4 className={`text-lg font-bold ${styles.textColor}`}>{feedback.evaluation}</h4>
          <p className="mt-1 text-slate-700">{feedback.feedback}</p>
          <p className="mt-2 text-sm text-slate-600 font-medium italic">"{feedback.suggestion}"</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
