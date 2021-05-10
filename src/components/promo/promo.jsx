import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { PROMO__ITEMS } from '../../const';
import PromoItem from '../promo-item/promo-item';
import SliderBullet from '../slider-bullet/slider-bullet';

const Promo = () => {
  const promoItems = PROMO__ITEMS.map((item, index) => {
    return <PromoItem key={index} {...item} />;
  });

  return (
    <section className="promo">
      <h2 className="visually-hidden">Предложения банка</h2>
      <Carousel
        interval={4000}
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        renderIndicator={(_onClickHandler, isSelected, index) => (
          <SliderBullet isSelected={isSelected} index={index} />
        )}
      >
        {promoItems}
      </Carousel>
    </section>
  );
};

export default Promo;
