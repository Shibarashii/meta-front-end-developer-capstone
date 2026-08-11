import Logo from './assets/Logo.svg';
export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="footer-navigation">
        <li className="footer-category-title"> Footer Navigation </li>
        <li>
          <a href="" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Menu
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Reservations
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Order Online
          </a>
        </li>
      </div>

      <div className="contact-details">
        <li className="footer-category-title">Contact Details</li>
        <li>
          <a href="" className="nav-link">
            Number
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Email
          </a>
        </li>
      </div>

      <div className="social-media">
        <li className="footer-category-title"> Social Media </li>
        <li>
          <a href="" className="nav-link">
            YouTube
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Facebook
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Instagram
          </a>
        </li>
      </div>
    </footer>
  );
}
