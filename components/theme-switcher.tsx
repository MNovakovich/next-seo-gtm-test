'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-8 w-[88px] items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
        <div className="h-6 w-6 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
      </div>
    );
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light mode' },
    { name: 'dark', icon: Moon, label: 'Dark mode' },
    { name: 'system', icon: Monitor, label: 'System theme' },
  ];

  return (
    <div className="flex items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
      {themes.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          aria-label={label}
          title={label}
          className={`relative flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
            theme === name
              ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-600 dark:text-zinc-50'
              : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}




