import React from 'react';
import LoginButton from '../login-button/login-button';

const Navigation = ({ className, isMenuOpened }) => {
  return (
    <ul className={`${className} nav ${isMenuOpened ? 'nav--close' : ''}`}>
      <li className="nav__item">
        <a className="nav-link" href="/">
          Услуги
        </a>
      </li>
      <li className="nav__item">
        <a className="nav-link" href="/">
          Рассчитать кредит
        </a>
      </li>
      <li className="nav__item">
        <a className="nav-link" href="/">
          Конвертер валют
        </a>
      </li>
      <li className="nav__item">
        <a className="nav-link" href="/">
          Контакты
        </a>
      </li>
      <li className="nav__item nav__item--login ">
        <LoginButton className="login-button--menu" />
      </li>
    </ul>
  );
};

export default Navigation;
