import React from 'react';

const PromoItem = ({ mod, content, button }) => {
  return (
    <div className={`promo-item  promo-item${mod}`}>
      <div className="promo-item__wrapper">
        <h3 className="promo-item__title">Лига Банк</h3>
        <span className="promo-item__content">{content}</span>
        {button && (
          <a href={button.link} className="promo-item__button">
            {button.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default PromoItem;
