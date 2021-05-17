import React from 'react';
import PropTypes from 'prop-types';

const InputRange = (props) => {
  const { className, name, value, min, max, step, onChange } = props;
  return (
    <input
      className={`${className} range`}
      type="range"
      min={min}
      max={max}
      value={value}
      name={name}
      id={name}
      step={step}
      onChange={onChange}
    />
  );
};

InputRange.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRange;
