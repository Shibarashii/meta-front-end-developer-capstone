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
        <a href="#" className="nav-link">
          HOME
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          MENU
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          RESERVATIONS
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          ORDER ONLINE
        </a>
      </li>
    </nav>
  );
}
