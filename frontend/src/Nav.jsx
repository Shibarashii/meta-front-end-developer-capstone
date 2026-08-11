import Logo from './assets/Logo .svg';
export default function Nav() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <li>
        <a href=""> HOME </a>
      </li>
      <li>
        <a href=""> ABOUT </a>
      </li>
      <li>
        <a href=""> MENU </a>
      </li>
      <li>
        <a href=""> RESERVATIONS </a>
      </li>
      <li>
        <a href=""> ORDER ONLINE </a>
      </li>
    </nav>
  );
}
