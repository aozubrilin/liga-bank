import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { extend, validateField } from '../../utils';
import { saveUserLoginLocalStorage } from '../../services/local-storage';
import { saveLoginData, setIsLoginPopupOpen } from '../../store/action';

const FormLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.dataLogin);

  const [validError, setValidError] = useState({});
  const [userData, setUserData] = useState({
    login: user.login,
    password: user.password,
  });

  const { login, password } = userData;

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setUserData(extend(userData, { [name]: value }));
    setValidError(extend(validError, { [name]: `` }));
    setIsFieldsEmpty(false);
  };
  const [isFieldsEmpty, setIsFieldsEmpty] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const OnPasswordShowMouseDown = () => {
    setIsPasswordShown(true);
  };
  const OnPasswordShowMouseUp = () => {
    setIsPasswordShown(false);
  };

  const OnPasswordShowTouchStart = () => {
    setIsPasswordShown(true);
  };

  const OnPasswordShowTouchEnd = () => {
    setIsPasswordShown(false);
  };

  const handlSubmitClick = (evt) => {
    evt.preventDefault();

    const isLoginError = validateField('login', login);
    const isPasswordError = validateField('password', password);
    setIsFieldsEmpty(!login && !password);
    setValidError(
      extend(validError, {
        login: isLoginError,
        password: isPasswordError,
      })
    );

    if (!isLoginError && !isPasswordError) {
      saveUserLoginLocalStorage(login, password);
      dispatch(saveLoginData(userData));
      dispatch(setIsLoginPopupOpen(false));
    }
  };

  return (
    <form
      className={`login__form ${isFieldsEmpty && 'login__form--empty'}`}
      action="https://echo.htmlacademy.ru/"
      method="get"
    >
      <div className="login__row">
        <label className="login__label label" htmlFor="login">
          Логин
        </label>
        <input
          className={`login__input input ${
            validError.login ? `input--invalid` : ``
          }`}
          value={login}
          name="login"
          type="text"
          id="login"
          autoFocus
          onChange={(evt) => {
            handleFieldChange(evt);
          }}
        />
        <span className="login__error">{validError.login}</span>
      </div>
      <div className="login__row login__row--password">
        <label className="login__label label" htmlFor="password">
          Пароль
        </label>
        <input
          className={`login__input input ${
            validError.login ? `input--invalid` : ``
          }`}
          value={password}
          type={`${isPasswordShown ? `text` : `password`}`}
          name="password"
          id="password"
          onChange={(evt) => {
            handleFieldChange(evt);
          }}
        />
        <span className="login__error">{validError.password}</span>
        <span className="login__error"></span>
        <button
          className="login__password-show"
          type="button"
          onMouseDown={OnPasswordShowMouseDown}
          onMouseUp={OnPasswordShowMouseUp}
          onTouchStart={OnPasswordShowTouchStart}
          onTouchEnd={OnPasswordShowTouchEnd}
        >
          <svg
            width="22"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.299 12l-1.963-.51.8-2.898a11.254 11.254 0 01-3.29-1.846L1.66 8.87.22 7.475 2.41 5.352A10.663 10.663 0 010 .354L2 0c.771 4.143 4.507 7.286 9 7.286 4.492 0 8.229-3.143 9-7.286l2 .353a10.662 10.662 0 01-2.409 5l2.188 2.122-1.438 1.395-2.188-2.124a11.254 11.254 0 01-3.29 1.846l.8 2.898-1.962.51-.8-2.898c-1.258.209-2.544.209-3.801 0L8.299 12z"
              fill="#1F1E25"
            />
          </svg>
        </button>
      </div>
      <a className="login__link-password" href="/">
        Забыли пароль?
      </a>
      <button
        className="login__submit"
        type="button"
        onClick={(evt) => {
          handlSubmitClick(evt);
        }}
      >
        Войти
      </button>
    </form>
  );
};

export default FormLogin;
