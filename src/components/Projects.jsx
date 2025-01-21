import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      description: 'A 10-story commercial building with state-of-the-art facilities.',
      fullDescription: `Our Modern Office Complex project represents the pinnacle of contemporary commercial architecture. 
      This 10-story building features:
      - 200,000 square feet of premium office space
      - LEED Gold certification for sustainability
      - Smart building technology integration
      - Rooftop garden and recreational areas
      - Underground parking for 300 vehicles
      - Floor-to-ceiling windows with energy-efficient glass
      
      The project was completed in 2024 after 24 months of construction, employing over 500 workers and using innovative building techniques.`,
      status: 'Completed 2024',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      thumbnails: [
        '/api/placeholder/200/150',
        '/api/placeholder/200/150',
        '/api/placeholder/200/150',
        '/api/placeholder/200/150'
      ]
    },
    {
      id: 2,
      title: 'Luxury Residential Development',
      description: '25-unit premium residential complex with modern amenities.',
      fullDescription: `The Luxury Residential Development project sets new standards in upscale living. 
      Features include:
      - 25 custom-designed luxury units
      - Premium finishes and materials throughout
      - State-of-the-art home automation systems
      - Private balconies and terraces
      - Communal infinity pool and spa
      - 24/7 security and concierge services
      
      Currently in the final phases of construction, with completion scheduled for late 2025.`,
      status: 'In Progress',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      thumbnails: [
        '/api/placeholder/200/150',
        '/api/placeholder/200/150',
        '/api/placeholder/200/150',
        '/api/placeholder/200/150'
      ]
    },
    {
      id: 3,
      title: 'Shopping Mall Renovation',
      description: 'Complete renovation and modernization of 50,000 sq ft retail space.',
      fullDescription: `A comprehensive renovation project that transformed an aging shopping center into a modern retail destination. 
      The project included:
      - Complete facade modernization
      - Updated lighting and HVAC systems
      - New digital wayfinding systems
      - Expanded food court with outdoor seating
      - Enhanced parking facilities
      - Improved accessibility features
      
      Completed in 2023 while maintaining partial operations for existing tenants.`,
      status: 'Completed 2023',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      thumbnails: [
        '/api/placeholder/200/150',
        '/api/placeholder/200/150',
        '/api/placeholder/200/150',
        '/api/placeholder/200/150'
      ]
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  if (selectedProject) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-6xl mx-auto bg-white rounded-lg">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[60vh] object-cover"
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
              >
                <ChevronRight size={24} />
              </button>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 p-4 bg-gray-100">
                {selectedProject.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative ${
                      currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={thumb} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-16 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {selectedProject.status}
                </span>
              </div>
              <p className="whitespace-pre-line text-gray-600">
                {selectedProject.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-left"
          >
            <img 
              src={project.thumbnails[0]} 
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-blue-600">{project.status}</p>
          </button>
        ))}
      </div>
    </div>
  );
}