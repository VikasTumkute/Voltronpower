"use client"
// /components/BookingForm/page.tsx
import React from 'react';

// Define the interface for BookingFormProps
interface BookingFormProps {
  service: string;
  price: string;
  onClose: () => void;
}

// Define the BookingForm component with the correct props
const BookingForm: React.FC<BookingFormProps> = ({ service, price, onClose }) => {
  return (
    <div className="booking-form">
      <h2>Booking for {service}</h2>
      <p>Price: {price}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BookingForm;
