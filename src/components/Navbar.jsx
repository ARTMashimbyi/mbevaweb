import React from 'react';
import { Menu, X, User } from 'lucide-react';
import logo from "./logo3.png";

export default function Navbar({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src={logo}
              alt="Mbeva Construction Logo" 
              className="h-16 w-16 rounded"
            />
            <h1 className="text-2xl font-bold text-gray-800">Mbeva Construction</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'projects' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`p-2 rounded-full ${
                activeTab === 'profile' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User size={20} />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                setActiveTab('services');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setActiveTab('profile');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
            >
              Company Profile
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}