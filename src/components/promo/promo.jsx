import React from 'react';
import SwiperSlider from '../swiper-slider/swiper-slider';
import { PROMO__ITEMS } from '../../const';
import PromoItem from '../promo-item/promo-item';

const Promo = () => {
  const promoItems = PROMO__ITEMS.map((item) => {
    return <PromoItem {...item} />;
  });

  return (
    <section className="promo">
      <h2 className="visually-hidden">Предложения банка</h2>
      <SwiperSlider slides={promoItems} type="promo" />
    </section>
  );
};

export default Promo;
