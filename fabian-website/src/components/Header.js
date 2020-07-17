import { Link } from 'react-router-dom';
import React from 'react';


function Header() {
  return (
    <div className="Header">
      <Link className="links_title" to="/">Fabian Amezquita</Link>
      <div className="link_container">
        <div className="home_link">
          <Link className="links" to="/"><p>Home</p></Link>
        </div>
        <div className="gallery_link">
          <Link className="links" to="/gallery"><p>Services</p></Link>
        </div>
        <div className="project_link">
            <Link className="links" to="/projects"><p>Projects</p></Link>
        </div>
        <div className="about_link">
          <Link className="links" to="/about"><p>About</p></Link>
        </div>
        <div className="contact_link">
          <Link className="links" to="/contact"><p>Contact</p></Link>
        </div>
      </div>
    </div>
  );
}


export default Header;