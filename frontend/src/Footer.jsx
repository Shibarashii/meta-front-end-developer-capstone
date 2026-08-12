import Logo from './assets/Logo.svg';
export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="footer-navigation">
        <li className="footer-highlight"> Footer Navigation </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            About
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Menu
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Reservations
          </a>
        </li>
        <li>
          <a href="" className="nav-link color-secondary-4 footer-text">
            Order Online
          </a>
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
