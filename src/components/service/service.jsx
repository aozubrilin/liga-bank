import React from 'react';
import PropTypes from 'prop-types';

const Service = ({
  mod,
  title,
  lists,
  button,
  description,
  descriptionLink,
}) => {
  return (
    <div className={`service service${mod}`}>
      <div className="service__wrapper">
        <h3 className="service__title">{title}</h3>
        <ul className="service__list">
          {lists.map((item, index) => {
            return (
              <li key={index} className="service__item">
                {item}
              </li>
            );
          })}
        </ul>
        {description && (
          <p className="service__description">
            {description}
            <a className="service__description-link" href="#calculator">
              {descriptionLink}
            </a>
          </p>
        )}
        {button && (
          <a href={button.href} className="service__button">
            {button.text}
          </a>
        )}
      </div>
    </div>
  );
};

Service.propTypes = {
  mod: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  descriptionLink: PropTypes.string,
};

export default Service;
