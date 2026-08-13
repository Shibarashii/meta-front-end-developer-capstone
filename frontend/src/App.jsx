import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { initializeTimes, updateTimes } from './utils/bookingTimes';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (globalThis.submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
