import { Link } from 'react-router-dom';
import Logo from './assets/Logo.svg';

export default function Nav() {
  return (
    <nav className="d-flex justify-center align-center" aria-label="Main Navigation">
      <ul className="d-flex justify-center align-center nav-list" style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" aria-label="Little Lemon Home">
            <img src={Logo} alt="Little Lemon Logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link color-secondary-4 paragraph-text">
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/booking"
            className="nav-link color-secondary-4 paragraph-text"
          >
            BOOKING
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link color-secondary-4 paragraph-text">
            MENU
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link color-secondary-4 paragraph-text">
            RESERVATIONS
          </Link>
        </li>
        <li>
          <a href="/" className="nav-link color-secondary-4 paragraph-text">
            ORDER ONLINE
          </a>
        </li>
      </ul>
    </nav>
  );
}

