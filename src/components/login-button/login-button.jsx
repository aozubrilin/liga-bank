import React from 'react';

const LoginButton = ({ className }) => {
  return (
    <button className={`${className} login-button`} type="button">
      <span className="login-button__text">Войти в Интернет-банк</span>
    </button>
  );
};

export default LoginButton;
