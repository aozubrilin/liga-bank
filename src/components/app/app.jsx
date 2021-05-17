import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../sass/style.scss';
import Main from '../main/main';
import Footer from '../footer/footer';
import Login from '../login/login';
import SuccessPopup from '../success-popup/success-popup';

const App = () => {
  const isSuccessPopupOpen = useSelector(({ app }) => app.isSuccessPopupOpen);
  const isLoginPopupOpen = useSelector(({ app }) => app.isLoginPopupOpen);
  const isMenuOpen = useSelector(({ app }) => app.isMenuOpen);

  useEffect(() => {
    if (isLoginPopupOpen || isMenuOpen || isSuccessPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isLoginPopupOpen, isMenuOpen, isSuccessPopupOpen]);

  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
      {isLoginPopupOpen && <Login />}
      {isSuccessPopupOpen && <SuccessPopup />}
    </Fragment>
  );
};

export default App;
