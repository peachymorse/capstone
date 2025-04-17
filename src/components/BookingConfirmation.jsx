import React from "react";
import { useNavigate } from "react-router-dom";
import './BookingConfirmation.css';

const BookingConfirmation = ({ formData }) => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2>Reservation Confirmed 🎉</h2>
        <p>Here are your booking details:</p>
        <ul>
          <li><strong>Name:</strong> {formData.name}</li>
          <li><strong>Email:</strong> {formData.email}</li>
          <li><strong>Date:</strong> {formData.date}</li>
          <li><strong>Time:</strong> {formData.time}</li>
          <li><strong>Guests:</strong> {formData.guests}</li>
          <li><strong>Occasion:</strong> {formData.occasion}</li>
        </ul>
        <button onClick={() => navigate("/")} aria-label="Return to Homepage">
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
