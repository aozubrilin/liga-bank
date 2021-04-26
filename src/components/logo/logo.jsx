import React from 'react';
import logoDesktop from '../../img/logo-desktop.svg';
import logoTablet from '../../img/logo-tablet.svg';
import logoMobile from '../../img/logo-mobile.svg';

const Logo = ({ className }) => {
  return (
    <a className={`${className} logo`} href="/">
      <picture className="logo__picture">
        <source srcSet={logoDesktop} media="(min-width: 1024px)" />
        <source srcSet={logoTablet} media="(min-width: 768px)" />
        <img
          className="logo__image"
          src={logoMobile}
          alt="Логотип сайта Лига Банк"
          width="116"
          height="18"
        />
      </picture>
    </a>
  );
};

export default Logo;
