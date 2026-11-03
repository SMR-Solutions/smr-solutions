import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const isSm = size === 'sm';

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer active:scale-95 ${
        isSm ? 'p-1.5' : 'p-2'
      } ${
        isDark
          ? 'bg-slate-800/90 hover:bg-slate-750 text-amber-300 border border-slate-700 hover:border-amber-400/50 shadow-sm'
          : 'bg-slate-100 hover:bg-slate-200 text-amber-600 border border-slate-200 hover:border-amber-400 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className={`relative flex items-center justify-center ${isSm ? 'w-4 h-4' : 'w-5 h-5'}`}>
        {isDark ? (
          <Sun className={`${isSm ? 'w-3.5 h-3.5' : 'w-4 h-4 sm:w-4.5 sm:h-4.5'} transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-300`} />
        ) : (
          <Moon className={`${isSm ? 'w-3.5 h-3.5' : 'w-4 h-4 sm:w-4.5 sm:h-4.5'} transition-transform duration-300 -rotate-12 hover:rotate-0 text-slate-800 fill-slate-800`} />
        )}
      </div>
    </button>
  );
};
