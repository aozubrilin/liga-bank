import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SERVICES } from '../../const';

SwiperCore.use([Pagination, Autoplay]);

const SwiperSlider = ({ slides, type }) => {
  const autoplay = type === 'promo' && {
    delay: 4000,
    disableOnInteraction: false,
  };
  const pagination =
    type !== 'promo'
      ? {
          bulletClass: 'services__bullet',
          bulletActiveClass: 'services__bullet--active',
        }
      : {
          bulletClass: 'promo__bullet',
          bulletActiveClass: 'promo__bullet--active',
        };

  const breakpoints = type === 'services' && {
    1024: {
      pagination: {
        clickable: true,
        el: '.services__pagination',
        renderBullet: (index, className) =>
          `<button class="${className}" type="button">
              <span class="sevices__lable sevices__lable${SERVICES[index].mod}">${SERVICES[index].lable}</span>
          </button>`,
      },
    },
  };

  return (
    <Swiper
      autoplay={autoplay}
      loop={true}
      simulateTouch={false}
      pagination={pagination}
      breakpoints={breakpoints}
    >
      {slides.map((slideContent, index) => {
        return <SwiperSlide key={index}>{slideContent}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default SwiperSlider;
