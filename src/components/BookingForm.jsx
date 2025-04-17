import React, { useState } from "react";
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch, setFormData }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validateForm = () => {
    if (name.trim().length < 2) {
      alert("Please enter a valid name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!date) {
      alert("Please select a date.");
      return false;
    }

    if (!time) {
      alert("Please select a time.");
      return false;
    }

    if (guests < 1 || guests > 10) {
      alert("Guests must be between 1 and 10.");
      return false;
    }

    if (!occasion) {
      alert("Please select an occasion.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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

<div className="booking-form-wrapper">
<h1 className="booking-form-title">Book a Table</h1>
    <form onSubmit={handleSubmit} className="booking-form">
  <label htmlFor="name">Full Name:</label>
  <input
    id="name"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />

  <label htmlFor="email">Email:</label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <label htmlFor="date">Date:</label>
  <input
    id="date"
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

  <label htmlFor="time">Time:</label>
  <select
    id="time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
    required
  >
    <option value="">Select a time</option>
    {availableTimes.map((t) => (
      <option key={t} value={t}>{t}</option>
    ))}
  </select>

  <label htmlFor="guests">Number of guests:</label>
  <input
    id="guests"
    type="number"
    min="1"
    max="10"
    value={guests}
    onChange={(e) => setGuests(e.target.value)}
    required
  />

  <label htmlFor="occasion">Occasion:</label>
  <select
    id="occasion"
    value={occasion}
    onChange={(e) => setOccasion(e.target.value)}
    required
  >
    <option value="">Select</option>
    <option value="None">None</option>
    <option value="Birthday">Birthday</option>
    <option value="Anniversary">Anniversary</option>
  </select>

  <button type="submit" aria-label="On Click">Submit Reservation</button>
</form>
</div>

  );
};

export default BookingForm;
