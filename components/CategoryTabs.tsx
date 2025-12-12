 'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({ selected, onChange }: CategoryTabsProps) {
  const tabs = ['All', 'Blogs', 'Guides', 'Templates'];
  return (
    <motion.div className="mt-10 flex justify-center space-x-4"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded ${
            selected === tab 
              ? 'bg-[#F97316] text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </motion.div>
  );
}