import React, { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingConfirmation from "../components/BookingConfirmation";

// Retrieve available times minus booked ones
const getAvailableTimes = (dateStr) => {
  const allTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const bookedForDate = bookings.filter(b => b.date === dateStr).map(b => b.time);
  return allTimes.filter(t => !bookedForDate.includes(t));
};

const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return getAvailableTimes(today);
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return getAvailableTimes(action.payload);
  }
  return state;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [formData, setFormData] = useState(null);

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      {!formData ? (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} setFormData={setFormData} />
      ) : (
        <BookingConfirmation formData={formData} />
      )}
    </div>
  );
};

export default BookingPage;
