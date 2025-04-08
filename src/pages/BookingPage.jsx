import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";


const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
};


const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }
  return state;
};

const BookingPage = () => {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;
