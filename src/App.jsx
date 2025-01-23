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
          <h2 className="text-3xl font-bold mb-6">About Mbeva Construction</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Introduction</h3>
            <p className="mb-4">
              MBEVA CONSTRUCTION is a South African company based in Johannesburg which operates nationally. We support Economic Empowerment programs and endeavor to transfer skills in the historically disadvantaged communities in which we operate.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="mb-4">
              To be a leading customer-driven company that provides comprehensive and innovative solutions that elevate our clients' products.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p>
              To become a market leader while being committed to meeting customer needs through high-quality, cost-effective, and technically managed solutions.
            </p>
          </div>
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