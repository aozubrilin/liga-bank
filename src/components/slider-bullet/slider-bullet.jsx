import React from 'react';

const SliderBullet = ({ isSelected, index }) => {
  return (
    <li
      className={`bullet  ${isSelected ? `bullet--active` : ``}`}
      aria-label={`слайдер ${index}`}
      role="button"
    ></li>
  );
};

export default SliderBullet;
