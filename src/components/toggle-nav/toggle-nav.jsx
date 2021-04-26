import React from 'react';

const ToggleNav = ({ className, onClick }) => {
  return (
    <button className={`${className} toggle`} type="button" onClick={onClick}>
      <span className="visually-hidden">Меню</span>
    </button>
  );
};

export default ToggleNav;
