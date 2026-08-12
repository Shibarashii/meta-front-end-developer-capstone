import Logo from './assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="d-flex justify-center">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="footer-navigation">
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
      </div>

      <div className="contact-details">
        <li className="footer-highlight">Contact Details</li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Number
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Email
          </a>
        </li>
      </div>

      <div className="social-media">
        <li className="footer-highlight"> Social Media </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            YouTube
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Facebook
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Instagram
          </a>
        </li>
      </div>
    </footer>
  );
}
