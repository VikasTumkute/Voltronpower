'use client';

import { useState } from 'react';
import BookingForm from './components/BookingForm';

export default function OilFiltrationPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="service-page">
      <h1>Oil Filtration</h1>
      <p>On Site Power Transformer Filtration & OIL BDV Acidity test included</p>
      <p>Price: ₹10.00 per KVA</p>
      <button onClick={() => setShowBookingForm(true)}>Book Now</button>

      {showBookingForm && (
        <BookingForm
          service="Oil Filtration"
          price="₹10.00 per KVA"
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <style jsx>{`
        .service-page {
          padding: 20px;
        }
        button {
          padding: 8px 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
