import React from 'react';

const Service = ({ mod, title, lists, button, description }) => {
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
        {description && <p className="service__description">{description}</p>}
        {button && (
          <a href={button.href} className="service__button">
            {button.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Service;
