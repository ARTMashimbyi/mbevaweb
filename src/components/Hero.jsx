import React from 'react';
import home from "./home2.jpg";


export default function Hero({ setActiveTab }) {
  return (
    <div 
    className="relative bg-cover bg-center text-white py-16" 
    style={{
      backgroundImage: `url(${home})` // Use the imported image variable
    }}>
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-blue-600 opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 z-10">
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