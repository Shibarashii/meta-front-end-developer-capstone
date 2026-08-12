import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './Homepage';
import BookingPage from './BookingPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
