import React from 'react';
import PropTypes from 'prop-types';

const SliderBullet = ({ isSelected, index }) => {
  return (
    <li
      className={`bullet  ${isSelected ? `bullet--active` : ``}`}
      aria-label={`слайдер ${index}`}
    ></li>
  );
};

SliderBullet.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default SliderBullet;
