import Logo from './assets/Logo.svg';
export default function Nav() {
  return (
    <nav>
      <li>
        <a href="#">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </li>
      <li>
        <a href="#" className="nav-link color-secondary-4 paragraph-text">
          HOME
        </a>
      </li>
      <li>
        <a href="#" className="nav-link color-secondary-4 paragraph-text">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#" className="nav-link color-secondary-4 paragraph-text">
          MENU
        </a>
      </li>
      <li>
        <a href="#" className="nav-link color-secondary-4 paragraph-text">
          RESERVATIONS
        </a>
      </li>
      <li>
        <a href="#" className="nav-link color-secondary-4 paragraph-text">
          ORDER ONLINE
        </a>
      </li>
    </nav>
  );
}
