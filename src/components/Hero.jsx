import React from 'react';

export default function Hero({ setActiveTab }) {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Building Tomorrow's Infrastructure Today</h2>
        <p className="text-xl mb-8">Excellence in Construction Since 2019</p>
        <button
          onClick={() => setActiveTab('contact')}
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}