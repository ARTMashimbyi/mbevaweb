import React from 'react';
import Projects from '../components/Projects';
import Profile from '../components/Profile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 max-w-7xl mx-auto px-4 py-12">
        <section id="projects">
          <Projects />
        </section>
        <section id="profile" className="mt-12">
          <Profile />
        </section>
      </div>
      <Footer />
    </div>
  );
}