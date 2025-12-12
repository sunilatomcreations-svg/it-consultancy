import { useState } from 'react';

interface CategoryTabsProps {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({ selected, onChange }: CategoryTabsProps) {
  const tabs = ['All', 'Blogs', 'Guides', 'Templates'];
  return (
    <div className="mt-10 flex justify-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded ${
            selected === tab 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}