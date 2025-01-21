import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and home additions tailored to your needs.'
    },
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and industrial facilities.'
    },
    {
      title: 'Infrastructure Development',
      description: 'Roads, bridges, and public works projects.'
    },
    {
      title: 'Interior Finishing',
      description: 'High-quality interior work including flooring, painting, and custom carpentry.'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}