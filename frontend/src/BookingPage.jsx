import { useState } from 'react';

const bookingData = [
  { date: '2024-07-10', time: '17:00', guests: 2, occasion: 'Birthday' },
  { date: '2024-07-15', time: '19:30', guests: 4, occasion: 'Anniversary' },
  { date: '2024-07-18', time: '18:00', guests: 3, occasion: 'Birthday' },
];

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    if (selectedDate) {
      const parsedDate = new Date(`${selectedDate}T12:00:00`);
      dispatch({ type: 'UPDATE_TIMES', date: parsedDate });

      // Reset time to the first available slot when the date changes
      if (availableTimes.length > 0 && !availableTimes.includes(time)) {
        setTime(availableTimes[0]);
      }
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleNumGuestsChange = (e) => {
    setNumGuests(Number(e.target.value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, numGuests, occasion });
  };

  // Client-side validation: all fields must be filled and guests within range
  const isFormValid =
    date !== '' &&
    time !== '' &&
    numGuests >= 1 &&
    numGuests <= 10 &&
    occasion !== '';

  return (
    <form className="booking-form bg-secondary-3 d-flex-column" onSubmit={handleSubmit}>
      <h2 className="section-title color-primary-1 center-text">Book Now</h2>

      <div className="form-group d-flex-column">
        <label htmlFor="res-date" className="lead-text color-secondary-4">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          onChange={handleDateChange}
          value={date}
          required
          aria-label="Choose date"
          className="form-control"
        />
      </div>

      <div className="form-group d-flex-column">
        <label htmlFor="res-time" className="lead-text color-secondary-4">
          Choose time
        </label>
        <select
          id="res-time"
          onChange={handleTimeChange}
          value={time}
          required
          aria-label="Choose time"
          className="form-control"
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group d-flex-column">
        <label htmlFor="guests" className="lead-text color-secondary-4">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleNumGuestsChange}
          value={numGuests}
          required
          aria-label="Number of guests"
          className="form-control"
        />
      </div>

      <div className="form-group d-flex-column">
        <label htmlFor="occasion" className="lead-text color-secondary-4">
          Occasion
        </label>
        <select
          id="occasion"
          onChange={handleOccasionChange}
          value={occasion}
          required
          aria-label="Occasion"
          className="form-control"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid}
        aria-label="On Click"
        className="call-to-action-button submit-btn"
      />
    </form>
  );
};

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <main>
      {/* Hero Banner aligned with CallToAction styling */}
      <section className="bg-primary-1 d-flex-column align-center center-text">
        <h1 className="display-title color-primary-2">Reservations</h1>
        <p className="subtitle color-secondary-3">Reserve a table at Little Lemon</p>
      </section>

      {/* Booking Form Section */}
      <section className="d-flex justify-center align-center">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>

      {/* Existing Bookings Table Section */}
      <section className="d-flex-column align-center">
        <h2 className="section-title color-primary-1 center-text" style={{ marginBottom: '1rem' }}>
          Recent Bookings
        </h2>
        <div className="table-responsive">
          <table className="booking-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr key={`${booking.date}-${booking.time}`}>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;

