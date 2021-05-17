import React from 'react';

const LoginButton = ({ className, onClick }) => {
  return (
    <button
      className={`${className} login-button`}
      type="button"
      aria-label="Войти"
      onClick={onClick}
    >
      <span className="login-button__text">Войти в Интернет-банк</span>
    </button>
  );
};

export default LoginButton;
