'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// BookingForm Component
const BookingForm: React.FC<{ service: string; onClose: () => void }> = ({ service, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const availableTimes = [
    '3:00 PM',
    '3:15 PM',
    '3:30 PM',
    '3:45 PM',
    '4:00 PM',
    '4:15 PM',
    '4:30 PM',
    '4:45 PM',
    '5:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time!');
      return;
    }
    alert(`Booking Confirmed!\nService: ${service}\nDate: ${selectedDate}\nTime: ${selectedTime}`);
    onClose();
  };

  return (
    <div className="booking-form">
      <h2>Book {service}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Select a Date</label>
          <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Select a Time</label>
          <div className="time-slots">
            {availableTimes.map((time) => (
              <button
                type="button"
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="actions">
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
          <button type="button" className="close-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

// Page Component
const BookingFormPage: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Navigate to the homepage or previous page
  };

  return (
    <BookingForm service="Example Service" onClose={handleClose} />
  );
};

export default BookingFormPage;

