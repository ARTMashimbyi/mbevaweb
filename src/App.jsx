import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'services' && <Services />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}