import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <input
        className='menutoggle'
        id="menu-toggle"
        type="checkbox"
      ></input>
      <label className='menucontainer' htmlFor="menu-toggle">
        <div className='menubutton'></div>
      </label>
      <ul>
        <li>
          <a href="/login">login</a>
        </li>
      </ul>
    </nav>
  );
  }