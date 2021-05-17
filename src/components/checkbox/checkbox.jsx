import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { name, title, onChange, value } = props;

  return (
    <div className="form-credit__field-checkbox">
      <input
        className="form-credit__checkbox visually-hidden"
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={onChange}
      />
      <label className="form-credit__label-checkbox" htmlFor={name}>
        {title}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Checkbox;
