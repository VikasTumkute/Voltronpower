// /components/ServiceDetails/page.tsx
'use client';
import React from 'react';

type ServiceDetailsProps = {
  title: string;
  description: string;
  features: string[];
  price: string;
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ title, description, features, price }) => {
  return (
    <section className="service-details">
      <h2>{title}</h2>
      <p>{description}</p>
      
      {/* Service Features */}
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">- {feature}</li>
        ))}
      </ul>

      <div className="service-price">
        <p>Price: <span className="price-amount">{price}</span></p>
      </div>

      <style jsx>{`
        .service-details {
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .service-details h2 {
          font-size: 1.75rem;
          color: #0070f3;
          margin-bottom: 10px;
        }

        .service-details p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .service-features {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 15px;
        }

        .feature-item {
          font-size: 1rem;
          color: #333;
        }

        .service-price {
          font-size: 1.25rem;
          font-weight: bold;
          color: #0070f3;
        }

        .price-amount {
          font-size: 1.4rem;
          color: #0070f3;
        }
      `}</style>
    </section>
  );
};

export default ServiceDetails;
