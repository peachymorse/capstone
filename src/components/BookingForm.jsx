import React, { useState } from "react";
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch, setFormData }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      name,
      email,
      date,
      time,
      guests,
      occasion,
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const isTaken = bookings.some(b => b.date === date && b.time === time);
    if (isTaken) {
      alert("This time slot has just been booked. Please choose another.");
      dispatch({ type: "UPDATE_TIMES", payload: date });
      return;
    }

    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    setFormData(booking);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Full Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => {
            const newDate = e.target.value;
            setDate(newDate);
            setTime("");
            dispatch({ type: "UPDATE_TIMES", payload: newDate });
          }}
          required
        />
      </label>

      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label>
        Number of guests:
        <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      </label>

      <label>
        Occasion:
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option value="">Select</option>
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
