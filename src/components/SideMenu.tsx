import React from 'react';
import { Menu, User, History, Mail, Phone } from 'lucide-react';
import { User as UserType } from '../types/auth';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserType | null;
  searchHistory: string[];
}

export function SideMenu({ isOpen, onClose, user, searchHistory }: SideMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <Menu size={24} />
            </button>
          </div>

          {/* Profile Section */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                <User size={32} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">{user?.name || 'Guest'}</h3>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Search History */}
          <div className="mb-8">
            <h3 className="font-bold flex items-center gap-2 mb-4">
              <History size={20} />
              Search History
            </h3>
            <ul className="space-y-2">
              {searchHistory.map((search, index) => (
                <li key={index} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                  {search}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-bold">Contact Us</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <a href="mailto:mouryas@outlook.in" className="hover:text-blue-500">
                mouryas@outlook.in
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <a href="tel:8762656329" className="hover:text-blue-500">
                +91 8762656329
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}