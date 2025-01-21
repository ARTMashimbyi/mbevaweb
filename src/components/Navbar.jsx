import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from "./logo.png";


export default function Navbar({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src={logo}
              alt="Mbeva Construction Logo" 
              className="h-25 w-20 rounded"
            />
            <h1 className="text-2xl font-bold text-gray-800">Mbeva Construction</h1>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
          </div>
        </div>
      )}
    </nav>
  );
}