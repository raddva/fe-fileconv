'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function DarkmodeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className={`
        relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 
        ${isDark ? 'bg-gray-700' : 'bg-yellow-400'}
      `}
        >
            <Sun className="absolute left-1 h-4 w-4 text-white" />
            <Moon className="absolute right-1 h-4 w-4 text-white" />

            <span
                className={`
          inline-block h-5 w-5 transform rounded-full bg-white shadow-md 
          transition-transform duration-300 ease-in-out
          ${isDark ? 'translate-x-6' : 'translate-x-1'}
        `}
            />
        </button>
    );
}
