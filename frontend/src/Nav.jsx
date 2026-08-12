import { Link } from 'react-router-dom';
import Logo from './assets/Logo.svg';
export default function Nav() {
  return (
    <nav className="d-flex justify-center align-center">
      <li>
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
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
    </nav>
  );
}
