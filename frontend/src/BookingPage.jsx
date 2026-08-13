import { useEffect, useState } from 'react';

const bookingData = [
  { date: '2024-07-10', time: '17:00', guests: 2, occasion: 'Birthday' },
  { date: '2024-07-15', time: '19:30', guests: 4, occasion: 'Anniversary' },
  { date: '2024-07-18', time: '18:00', guests: 3, occasion: 'Birthday' },
];

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    if (selectedDate) {
      const parsedDate = new Date(`${selectedDate}T12:00:00`);
      dispatch({ type: 'UPDATE_TIMES', date: parsedDate });
    }
  };

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

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

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={handleDateChange}
        value={date}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={handleTimeChange} value={time}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={handleNumGuestsChange}
        value={numGuests}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChange} value={occasion}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <main>
      <section className="d-flex justify-center">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </section>

      <section className="d-flex justify-center" style={{ marginTop: '2rem' }}>
        <table>
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
      </section>
    </main>
  );
};

export default BookingPage;
