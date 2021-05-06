import React from 'react';
import SwiperSlider from '../swiper-slider/swiper-slider';
import { SERVICES } from '../../const';
import Service from '../service/service';

const Services = () => {
  const servicesItems = SERVICES.map((item) => {
    return <Service {...item} />;
  });

  return (
    <section className="services">
      <h2 className="visually-hidden">Услуги банка</h2>
      <div className="services__pagination"></div>
      <SwiperSlider slides={servicesItems} type="services" />
    </section>
  );
};

export default Services;
