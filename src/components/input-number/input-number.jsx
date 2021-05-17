import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ERROR_COST_INPUT } from '../../const';

const InputNumber = (props) => {
  const {
    className,
    name,
    value,
    min,
    max,
    step,
    onChange,
    onConvert,
    onBlur,
    isValid,
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [typeInput, setTypeInput] = useState('text');

  return (
    <input
      className={`${className} input`}
      name={name}
      id={name}
      min={min}
      max={max}
      step={step}
      type={typeInput}
      onChange={onChange}
      onBlur={() => {
        onBlur();
        setIsFocus(false);
        setTypeInput('text');
      }}
      onFocus={() => {
        setTypeInput('number');
        setIsFocus(true);
      }}
      value={
        isValid
          ? isFocus
            ? value
            : onConvert(value)
          : isFocus
          ? value
          : ERROR_COST_INPUT
      }
    />
  );
};

InputNumber.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onConvert: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default InputNumber;
