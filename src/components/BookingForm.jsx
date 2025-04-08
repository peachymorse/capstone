import React, { useState } from "react";
import './BookingForm.css';

const BookingForm = ({ availableTimes, setAvailableTimes })  => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    console.log("Form submitted:", formData);
    // note to self for setting up the API
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label>
        Number of guests:
        <input
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </label>

      <label>
        Occasion:
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value="">Select</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
