import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Refs for scrolling
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const profileRef = useRef(null);

  // Scroll to section function
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          servicesRef={servicesRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          profileRef={profileRef}
        />
      </div>
      
      <div className="pt-16">
        <Hero setActiveTab={setActiveTab} />
        
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Introduction Section */}
          <section className="mb-12">
            {/* ... (previous introduction content remains the same) ... */}
          </section>

          {/* Services Section */}
          <section ref={servicesRef}>
            <Services />
          </section>

          {/* Projects Section */}
          <section ref={projectsRef} className="mt-12">
            <Projects />
          </section>

          {/* Profile Section */}
          <section ref={profileRef} className="mt-12">
            <Profile />
          </section>

          {/* Contact Section */}
          <section ref={contactRef} className="mt-12">
            <Contact />
          </section>
        </main>

        <Footer setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}