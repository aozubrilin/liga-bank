import React from 'react';
import PropTypes from 'prop-types';

const ToggleNav = ({ className, onClick }) => {
  return (
    <button className={`${className} toggle`} type="button" onClick={onClick}>
      <span className="visually-hidden">Меню</span>
    </button>
  );
};

ToggleNav.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleNav;
