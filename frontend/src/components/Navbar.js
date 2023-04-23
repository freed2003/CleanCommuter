import "../styles/Navbar.css";
import logo from './../images/Clean_Commuters.svg'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <a href="/">
        <img className="brand-logo" src={logo} alt="Logo"/>
      </a>
      <input
        className='menutoggle'
        id="menu-toggle"
        type="checkbox"
      >
      </input>
      <label className='menucontainer' htmlFor="menu-toggle">
        <div className='menubutton'></div>
      </label>
      <ul>
        <li>
          <a href="/about">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
  }