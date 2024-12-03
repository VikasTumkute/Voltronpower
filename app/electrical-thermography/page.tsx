'use client';

import { useState } from 'react';
import BookingForm from './components/BookingForm/page';
import ServiceDetails from './components/ServiceDetails/page'; // Import ServiceDetails component

export default function ThermographyAuditPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="thermography-audit-page">
      {/* Thermography Audit Image */}
      <img
        src="/image/electrical-thermograpy.jpg" // Replace with your image path
        alt="Electrical Thermography Audit"
        className="thermography-image"
      />

      <h1>Electrical Thermography Audit</h1>

      {/* Service Details */}
      <ServiceDetails
        title="Thermography Service"
        description="Thermography is a non-invasive, non-destructive, and cost-effective process. It is widely used in condition monitoring to detect potential issues before they become critical failures. This ensures optimal safety, reliability, and efficiency of electrical systems."
        features={[
          "Non-invasive and non-destructive",
          "Helps in condition monitoring",
          "Early detection of electrical issues",
          "Improves safety and reliability of electrical systems"
        ]}
        price="₹9,000.00 per Day"
      />

      {/* Book a Service Button */}
      <button onClick={() => setShowBookingForm(true)} className="book-button">
        Book Now
      </button>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          service="Electrical Thermography Audit"
          price="₹9,000.00 per Day"
          onClose={() => setShowBookingForm(false)}
        />
      )}

      {/* Internal CSS */}
      <style jsx>{`
        .thermography-audit-page {
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .thermography-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          margin: 0 auto 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
        }

        .book-button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .book-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
