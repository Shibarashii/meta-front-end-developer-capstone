import Logo from './assets/Logo .svg';
export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <div className="footer-navigation">
        <li>
          <a href=""> Home </a>
        </li>
        <li>
          <a href=""> About </a>
        </li>
        <li>
          <a href=""> Menu </a>
        </li>
        <li>
          <a href=""> Reservations </a>
        </li>
        <li>
          <a href=""> Order Online </a>
        </li>
      </div>

      <div className="contact-details">
        <li> Contact Details </li>
        <li>
          <a href=""> Number </a>{' '}
        </li>
        <li>
          <a href=""> Email </a>{' '}
        </li>
      </div>
      <div className="social-media">
        <li> Social Media </li>
        <li>
          <a href=""> YouTube </a>
        </li>
        <li>
          <a href=""> Facebook </a>
        </li>
        <li>
          <a href=""> Instagram </a>
        </li>
      </div>
    </footer>
  );
}
