import Logo from './assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="d-flex justify-center" aria-label="Footer">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <nav className="footer-navigation" aria-label="Footer Navigation">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="footer-highlight"> Footer Navigation </li>
          <li>
            <Link to="/" className="nav-link color-secondary-4 footer-text">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className="nav-link color-secondary-4 footer-text"
            >
              Booking
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link color-secondary-4 footer-text">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link color-secondary-4 footer-text">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link color-secondary-4 footer-text">
              Order Online
            </Link>
          </li>
        </ul>
      </nav>

      <div className="contact-details">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="footer-highlight">Contact Details</li>
          <li>
            <a href="/" className="nav-link color-secondary-4 footer-text">
              Number
            </a>
          </li>
          <li>
            <a href="/" className="nav-link color-secondary-4 footer-text">
              Email
            </a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="footer-highlight"> Social Media </li>
          <li>
            <a href="/" className="nav-link color-secondary-4 footer-text">
              YouTube
            </a>
          </li>
          <li>
            <a href="/" className="nav-link color-secondary-4 footer-text">
              Facebook
            </a>
          </li>
          <li>
            <a href="/" className="nav-link color-secondary-4 footer-text">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

