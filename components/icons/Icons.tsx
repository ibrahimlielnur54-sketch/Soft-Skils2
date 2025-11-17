import React from 'react';

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3.375 3.375 0 019 12.75l-1.546.927a3.375 3.375 0 00-4.682-2.72m-7.5-2.962a9.094 9.094 0 013.741-.479 3 3 0 014.682 2.72M12 12.75a3.375 3.375 0 110-6.75 3.375 3.375 0 010 6.75z" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.537a5.56 5.56 0 01-1.04 1.04l-1.25.938-1.25-.938a5.56 5.56 0 01-1.04-1.04l-3.722-.537A2.25 2.25 0 012.25 15v-4.286c0-.97.616-1.813 1.5-2.097v6.087a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-6.087z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311V21m-3.75-2.311V21m10.125-9.335a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zM4.125 11.665a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a3.75 3.75 0 00-3.75 3.75h7.5A3.75 3.75 0 0012 4.5z" />
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345h5.584a.563.563 0 01.328.948l-4.204 3.057a.563.563 0 00-.182.557l1.528 4.97a.563.563 0 01-.82.623l-3.95-2.887a.563.563 0 00-.658 0l-3.95 2.887a.563.563 0 01-.82-.623l1.528-4.97a.563.563 0 00-.182-.557l-4.204-3.057a.563.563 0 01.328-.948h5.584a.563.563 0 00.475-.345L11.48 3.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21h15" />
    </svg>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 001.04-1.04l1.25-.938 1.25.938a9.75 9.75 0 001.04 1.04zM12 1.5c-2.485 0-4.5 2.015-4.5 4.5 0 1.054.368 2.023.984 2.801L7.5 12h9l-1.016-3.199A4.505 4.505 0 0016.5 6c0-2.485-2.015-4.5-4.5-4.5zM12 1.5V6m0 6v6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.375 21V12m5.25 9V12m-7.5 9h9.375c.621 0 1.125-.504 1.125-1.125V18.375M4.5 18.375v1.5c0 .621.504 1.125 1.125 1.125H9.375" />
    </svg>
);


export const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);