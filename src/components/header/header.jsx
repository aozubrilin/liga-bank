import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsMenuOpen, setIsLoginPopupOpen } from '../../store/action';
import ToggleNav from '../toggle-nav/toggle-nav';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import LoginButton from '../login-button/login-button';
import CloseButton from '../close-button/close-button';
import { HEADER_LINKS } from '../../const';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(({ app }) => app.isMenuOpen);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const handleMenuOpenClick = () => {
    dispatch(setIsMenuOpen(true));
  };

  const handleMenuCloseClick = () => {
    dispatch(setIsMenuOpen(false));
  };

  const handlSigInClick = () => {
    dispatch(setIsLoginPopupOpen(true));
  };

  return (
    <header className="header">
      <nav className="header__nav main-nav wrapper">
        <ToggleNav className="main-nav__toggle" onClick={handleMenuOpenClick} />
        <Logo className="main-nav__logo" />
        <Navigation
          className="main-nav__nav"
          isMenuOpened={isMenuOpen}
          isMobile={isMobile}
          navLinks={HEADER_LINKS}
          onSigInClick={handlSigInClick}
        />

        {isMobile ? (
          isMenuOpen ? (
            <CloseButton
              className="main-nav__close-button"
              onClick={handleMenuCloseClick}
            />
          ) : (
            <LoginButton
              className="main-nav__login-button login-button"
              onClick={handlSigInClick}
            />
          )
        ) : (
          <LoginButton
            className="main-nav__login-button login-button"
            onClick={handlSigInClick}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
