import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="fylo logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
