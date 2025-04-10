import React from "react";

const BookingConfirmation = ({ formData }) => {
  return (
    <div className="confirmation">
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
    </div>
  );
};

export default BookingConfirmation;
