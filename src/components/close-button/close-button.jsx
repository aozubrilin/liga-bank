import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ className, onClick }) => {
  return (
    <button
      className={`${className} close-button`}
      type="button"
      aria-label="Закрыть"
      onClick={onClick}
    ></button>
  );
};

CloseButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
