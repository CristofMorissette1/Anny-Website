import { Link } from 'react-router-dom';
import React from 'react';


function Header() {
  return (
    <div className="Header">
      <h2 className="links_title">Anny Trépanier</h2>
      <div className="link_container">
        <div className="home_link">
          <Link className="links" to="/"><p>Home</p></Link>
        </div>
        <div className="about_link">
          <Link className="links" to="/about"><p>About</p></Link>
        </div>
        <div className="contact_link">
          <Link className="links" to="/contact"><p>Contact Us</p></Link>
        </div>
      </div>
    </div>
  );
}


export default Header;
