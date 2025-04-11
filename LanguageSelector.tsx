import React from 'react';
import { useStore } from '../store';
import { Language } from '../types';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useStore();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <Globe size={20} className="text-brand-deep-lilac" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-white border-2 border-brand-lavender rounded-full px-4 py-2 text-brand-deep-lilac font-poppins font-medium hover:border-brand-deep-lilac transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-deep-lilac focus:ring-opacity-50"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}