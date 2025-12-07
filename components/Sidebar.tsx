'use client';
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-48 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: '#6B2259' }}>Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-gray-900 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 flex-1">
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-900 font-medium text-lg transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-gray-900 font-medium text-lg transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-gray-900 font-medium text-lg transition-colors"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="text-gray-800 hover:text-gray-900 font-medium text-lg transition-colors"
              onClick={onClose}
            >
              Industries
            </Link>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 font-medium text-lg transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 font-medium text-lg transition-colors"
            >
              Resources
            </a>
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="px-6 py-3 text-white font-semibold rounded w-full text-center transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#F97316' }}
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
