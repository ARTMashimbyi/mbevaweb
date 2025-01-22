import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and home additions tailored to your needs.',
      fullDescription: `Our residential construction services cover everything from ground-up custom homes to complex renovations. Our expertise includes:
      - Custom home design and construction
      - Home additions and extensions
      - Major renovations and remodeling
      - Luxury home features and amenities
      - Energy-efficient building practices
      - Smart home technology integration

      We work closely with homeowners to bring their vision to life while ensuring the highest quality standards.`,
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
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and industrial facilities.',
      fullDescription: `We specialize in commercial construction projects of all sizes. Our services include:
      - Office building construction
      - Retail space development
      - Industrial facility construction
      - Warehouse and logistics centers
      - Medical facilities and laboratories
      - Restaurant and hospitality spaces

      Our team ensures efficient project management and timely delivery while maintaining the highest safety standards.`,
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
      title: 'Infrastructure Development',
      description: 'Roads, bridges, and public works projects.',
      fullDescription: `Our infrastructure development services support public and private sector needs. We handle:
      - Road construction and maintenance
      - Bridge building and rehabilitation
      - Underground utility systems
      - Public transportation infrastructure
      - Storm water management systems
      - Environmental conservation projects

      Each project is executed with careful attention to safety, durability, and environmental impact.`,
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
      id: 4,
      title: 'Interior Finishing',
      description: 'High-quality interior work including flooring, painting, and custom carpentry.',
      fullDescription: `Our interior finishing services bring spaces to life with attention to detail and premium craftsmanship. Services include:
      - Custom cabinetry and millwork
      - Hardwood and specialty flooring
      - Professional painting and wall finishes
      - Custom built-ins and shelving
      - Ceiling treatments and lighting
      - High-end material installation

      We work with both residential and commercial clients to create stunning interior spaces.`,
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