import React from 'react';
import LoginButton from '../login-button/login-button';

const Navigation = ({ className, isMenuOpened, mod, navLinks }) => {
  return (
    <ul
      className={`${className} nav ${mod && `nav${mod}`} ${
        isMenuOpened ? 'nav--close' : ''
      }`}
    >
      {navLinks.map((item, index) => (
        <li className="nav__item" key={`${index}-${item}`}>
          <a className="nav-link" href="/">
            {item}
          </a>
        </li>
      ))}
      <li className="nav__item nav__item--login ">
        <LoginButton className="login-button--menu" />
      </li>
    </ul>
  );
};

export default Navigation;
