import React from 'react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mbeva Construction</h3>
            <p className="text-gray-400">Building excellence, delivering results.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('services')}
                className="block text-gray-400 hover:text-white"
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className="block text-gray-400 hover:text-white"
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Mbeva Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}