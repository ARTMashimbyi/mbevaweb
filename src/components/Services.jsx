import React, { useState } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Wrench, PaintBucket, 
  Axe, Wind, Cpu, Zap, Globe, Building, 
  Home, ArrowDownToLine, 
  SunDim, Cable, CodeXml, Lightbulb, 
  Activity, HardHat
} from 'lucide-react';



export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);

  const additionalServices = [
    {
      name: 'Plumbing Reticulation',
      icon: Activity,
      description: 'Expert installation of reticulation and irrigation systems, handling every step of the process.'
    },
    {
      name: 'Ceilings (Suspended and Plastered)',
      icon: Building,
      description: 'Flexible and modern ceiling solutions for residential and commercial spaces.'
    },
    {
      name: 'Roof and Roof Structures',
      icon: Building,
      description: 'Comprehensive roofing and waterproofing repairs for domestic, commercial, and industrial properties.'
    },
    {
      name: 'Gutter and Storm Water Drainage',
      icon: Activity,
      description: 'Specialized drainage services including comprehensive drain and pipe cleaning.'
    },
    {
      name: 'Paving and Curbing',
      icon: HardHat,
      description: 'Versatile paving and curbing solutions for commercial and residential sectors.'
    },
    {
      name: 'Aluminium, Wood Doors and Windows Closures',
      icon: Home,
      description: 'Professional installation and re-installation of door and window closures.'
    },
    {
      name: 'Drywall Partitioning',
      icon: Building,
      description: 'Comprehensive drywall and partitioning systems tailored to your needs.'
    },
    {
      name: 'Shop Fitting/Carpentry',
      icon: Axe,
      description: 'Expert shop display and office fitting services with precision craftsmanship.'
    },
    {
      name: 'Steelwork and Balustrades',
      icon: Wrench,
      description: 'Complete range of steelwork and balustrade options with professional installation.'
    },
    {
      name: 'Painting and Artwork (including wall paper)',
      icon: PaintBucket,
      description: 'Comprehensive painting solutions and wall papering services.'
    },
    {
      name: 'Air Conditioning',
      icon: Wind,
      description: 'Supply and installation of a wide range of air conditioning systems.'
    },
    {
      name: 'Extraction Systems',
      icon: ArrowDownToLine,
      description: 'High-quality extraction and ventilation system supply and installation.'
    },
    {
      name: 'Architectural Plans and Council Approval',
      icon: CodeXml,
      description: 'Comprehensive council approval services for building erections and alterations.'
    },
    {
      name: 'Building',
      icon: Building,
      description: 'Multi-skilled tradesmen capable of handling all building requirements.'
    },
    {
      name: 'Electrical Reticulation',
      icon: Zap,
      description: 'Expert electrical and lighting consultancy and implementation.'
    },
    {
      name: 'Project Management',
      icon: Cpu,
      description: 'Professional project management ensuring timely and efficient completion.'
    },
    {
      name: 'Civil and Earthworks',
      icon: Globe,
      description: 'Leading providers of civil and bulk earthworks in the property development sector.'
    },
    {
      name: 'Roads and Storm Water Services',
      icon: HardHat,
      description: 'High-quality and sustainable road and storm water service solutions.'
    },
    {
      name: 'Concrete Works',
      icon: Building,
      description: 'Complete concrete preparation, delivery, distribution, and curing services.'
    },
    {
      name: 'Green Energy Solutions',
      icon: SunDim,
      description: 'Environmentally conscious solutions to minimize carbon footprint.'
    },
    {
      name: 'Data Cabling',
      icon: Cable,
      description: 'Implementation of cabling infrastructures of various types and sizes.'
    },
    {
      name: 'Home Automation',
      icon: Lightbulb,
      description: 'Integrated home systems with automated interfaces and programming.'
    },
    {
      name: 'Generators and Alternative Energy Sources',
      icon: Zap,
      description: 'Diverse alternative energy source solutions for various needs.'
    }
  ];

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
        '/imgs/res/res1.jpg',
        '/imgs/res/res2.jpg',
        '/imgs/res/res3.webp',
        '/imgs/res/res4.jpg'
      ],
      thumbnails: [
        '/imgs/res/res1.jpg',
        '/imgs/res/res2.jpg',
        '/imgs/res/res3.webp',
        '/imgs/res/res4.jpg'
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
       '/img/int.jpg',
        '/img/int1.jpg',
        '/img/int2.jpg',
        '/img/inr3.jpg'
      ],
      thumbnails: [
        '/img/int.jpg',
        '/img/int1.jpg',
        '/img/int2.jpg',
        '/img/inr3.jpg'
      ]
    },
    {
      id: 5,
      title: 'General & Commercial Building Construction',
      description: 'Office, home, and commercial renovations/building production.',
      fullDescription: `We provide turnkey production services from the conceptual drawing stage to project closing. We partner with clients to allow them to continue with their core business while we take care of their production needs.`,
      images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
      thumbnails: ['/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150', '/api/placeholder/200/150']
    },
    
    {
      id: 7,
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

      <div className="mt-8">
        <button 
          onClick={() => setShowAdditionalServices(!showAdditionalServices)}
          className="w-full flex justify-between items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="text-xl font-semibold">View All Our Services</span>
          {showAdditionalServices ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>

        {showAdditionalServices && (
          <div className="mt-4 grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            {additionalServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4 group"
                >
                  <div className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                    <ServiceIcon className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{service.name}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}