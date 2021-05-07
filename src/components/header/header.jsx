import React, { useState } from 'react';
import ToggleNav from '../toggle-nav/toggle-nav';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import LoginButton from '../login-button/login-button';
import CloseButton from '../close-button/close-button';
import { HEADER_LINKS } from '../../const';

const Header = () => {
  const [isMenuOpened, setMenuOpened] = useState(true);

  const handleMenuClick = () => {
    setMenuOpened(!isMenuOpened);
  };

  return (
    <header className="header">
      <nav className="header__nav main-nav wrapper">
        <ToggleNav className="main-nav__toggle" onClick={handleMenuClick} />
        <Logo className="main-nav__logo" />
        <Navigation
          className="main-nav__nav"
          isMenuOpened={isMenuOpened}
          navLinks={HEADER_LINKS}
        />

        {isMenuOpened ? (
          <LoginButton className="main-nav__login-button login-button" />
        ) : (
          <CloseButton
            className="main-nav__close-button"
            onClick={handleMenuClick}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
