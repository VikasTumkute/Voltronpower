'use client';

import ServiceCard from '../ServiceCard/page';

const ServiceList = () => {
  const services = [
    {
      title: 'Power Transformer Sales & Service',
      description: 'Comprehensive solutions for power transformers, including sales, installation, and maintenance.',
      link: '/power-transformer',
    },
    {
      title: 'Electrical Thermography Audit',
      description: 'Identify and resolve potential issues in your electrical systems with our infrared imaging solutions.',
      link: '/electrical-thermography',
    },
    {
      title: 'Oil-Filtration',
      description: 'Comprehensive solutions for power transformers, including sales, installation, and maintenance.',
      link: '/power-transformer/services/oil-filtration',
    },
    {
      title: 'Transformer-Megger-Test',
      description: 'Comprehensive solutions for power transformers, including sales, installation, and maintenance.',
      link: '/power-transformer/transformer-megger-test',
    },
    
  ];

  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}

      <style jsx>{`
        .service-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default ServiceList;
