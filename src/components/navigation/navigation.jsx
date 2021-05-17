import React from 'react';
import LoginButton from '../login-button/login-button';
import PropTypes from 'prop-types';

const Navigation = ({
  className,
  isMenuOpened,
  mod,
  navLinks,
  isMobile,
  onSigInClick,
}) => {
  return (
    <ul
      className={`${className} nav ${mod && `nav${mod}`} ${
        isMobile ? (isMenuOpened ? '' : 'nav--close') : ``
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
        <LoginButton className="login-button--menu" onClick={onSigInClick} />
      </li>
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  mod: PropTypes.string,
  isMenuOpened: PropTypes.bool,
  onSigInClick: PropTypes.func,
  isMobile: PropTypes.bool,
  navLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navigation;
