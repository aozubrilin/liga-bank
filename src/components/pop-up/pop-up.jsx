import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ className, children }) => {
  return (
    <section className={`${className} modal`}>
      <div className={`${className}__wrapper modal__wrapper`}>{children}</div>
    </section>
  );
};

PopUp.propTypes = {
  className: PropTypes.string.isRequired,
};

export default PopUp;
