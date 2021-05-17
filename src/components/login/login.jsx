import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ESC_CODE } from '../../const';
import { setIsLoginPopupOpen } from '../../store/action';
import CloseButton from '../close-button/close-button';
import FormLogin from '../form-login/form-login';
import PopUp from '../pop-up/pop-up';

const Login = () => {
  useEffect(() => {
    window.addEventListener('keydown', onEscButtonPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const onEscButtonPress = (evt) => {
    if (evt.keyCode === ESC_CODE) {
      evt.preventDefault();
      dispatch(setIsLoginPopupOpen(false));
      document.removeEventListener(`keydown`, onEscButtonPress);
    }
  };

  const handleCloseButtonClick = () => {
    dispatch(setIsLoginPopupOpen(false));
  };

  return (
    <PopUp className="login">
      <div className="login__header">
        <img
          className="login__logo"
          src="img/logo-modal.svg"
          width="151"
          height="31"
          alt="Логотип Лига Банка"
        />
        <CloseButton
          className="login__close"
          onClick={handleCloseButtonClick}
        />
      </div>
      <FormLogin />
    </PopUp>
  );
};

export default Login;
