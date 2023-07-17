import { useState, useEffect } from 'react';
import logo from './assets/NetflipLogo.png';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img src={logo} className="nav__logo" alt="Netflip Logo" />
    </div>
  );
}

export default Nav;
