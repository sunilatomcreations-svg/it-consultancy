"use client";
import React, { createContext, useContext, useState } from 'react';

interface SettingsContextType {
  settings: {
    borderRadius: number;
    padding: number;
    sections: Array<{
      id: string;
      title: string;
      items: string[];
      hasViewMore: boolean;
    }>;
    showGetInTouch: boolean;
  };
  updateSettings: (newSettings: any) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState({
    borderRadius: 8,
    padding: 16,
    sections: [
      {
        id: 'company',
        title: 'Our Company',
        items: [
          'About',
          'Core Team', 
          'Careers',
          'CSR',
          'How We Work'
        ],
        hasViewMore: false
      },
      {
        id: 'services',
        title: 'Services',
        items: [
          'Consulting',
          'RPA',
          'Finance',
          'Development',
          'Thinking',
          'Software Development',
          'Cloud Services',
          'Managed IT Services'
        ],
        hasViewMore: true
      },
      {
        id: 'technologies',
        title: 'Technologies',
        items: [
          'AR/VR',
          'Blockchain'
        ],
        hasViewMore: true
      },
      {
        id: 'industries',
        title: 'Industries',
        items: [
          'Education',
          'On-Demand',
          'eCommerce'
        ],
        hasViewMore: true
      },
      {
        id: 'resources',
        title: 'Resources',
        items: [
          'Press Releases',
          'News',
          'Client Testimonials'
        ],
        hasViewMore: false
      }
    ],
    showGetInTouch: true
  });

  const updateSettings = (newSettings: any) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};