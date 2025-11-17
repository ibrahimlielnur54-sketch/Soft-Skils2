import React from 'react';
import type { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    onNavigate: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => onNavigate(page)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
            }`}
        >
            {children}
        </button>
    );
};


const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 md:px-8 flex justify-between items-center">
        <div>
            <h1 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Soft Skills Coach
            </h1>
        </div>
        <nav className="flex items-center space-x-2 md:space-x-4">
            <NavLink page="skills" currentPage={currentPage} onNavigate={onNavigate}>Bacarıqlar</NavLink>
            <NavLink page="progress" currentPage={currentPage} onNavigate={onNavigate}>Hesabatım</NavLink>
            <NavLink page="about" currentPage={currentPage} onNavigate={onNavigate}>Layihə Haqqında</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;