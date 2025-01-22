import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'General & Commercial Building Construction',
      description: 'Office, home, and commercial renovations/building production.',
      fullDescription: `We provide turnkey production services from the conceptual drawing stage to project closing. We partner with clients to allow them to continue with their core business while we take care of their production needs.`,
      images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
      thumbnails: ['/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150']
    },
    {
      id: 2,
      title: 'Renovation Services',
      description: 'Comprehensive renovation solutions for new and existing infrastructure.',
      fullDescription: `Our Renovation division provides comprehensive solutions to new and existing infrastructure. We offer upgrades on package selections and deliver cost-effective solutions tailored to each client's unique needs.`,
      images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
      thumbnails: ['/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150']
    },
    {
      id: 3,
      title: 'Specialized Services',
      description: 'Plumbing, electrical, carpentry, and more.',
      fullDescription: `We offer specialized services including:
      - Plumbing
      - Electrical work
      - Carpentry
      - Partitioning
      - Ceiling installation
      - Welding/Metal works
      - Painting`,
      images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
      thumbnails: ['/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150']
    },
    {
      id: 4,
      title: 'Infrastructure Development',
      description: 'Complete infrastructure solutions and development services.',
      fullDescription: `Our infrastructure development services include comprehensive planning, design, and implementation of various infrastructure projects. We focus on delivering quality results while maintaining cost-effectiveness.`,
      images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
      thumbnails: ['/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150']
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedService.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedService.images.length - 1 : prev - 1
    );
  };

  if (selectedService) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-6xl mx-auto bg-white rounded-lg">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              <button 
                onClick={() => {
                  setSelectedService(null);
                  setCurrentImageIndex(0);
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative">
              <img 
                src={selectedService.images[currentImageIndex]} 
                alt={`${selectedService.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[60vh] object-cover"
              />
              
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

              <div className="flex justify-center gap-2 p-4 bg-gray-100">
                {selectedService.thumbnails.map((thumb, index) => (
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

            <div className="p-6">
              <p className="whitespace-pre-line text-gray-600">
                {selectedService.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-left"
          >
            <img 
              src={service.thumbnails[0]} 
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}