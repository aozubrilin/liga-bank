import React from 'react';
import Promo from '../promo/promo';
import Services from '../services/services';
import YandexMap from '../yandex-map/yandex-map';

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <Services />
      <YandexMap />
    </main>
  );
};

export default Main;
