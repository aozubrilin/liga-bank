import React from 'react';
import Calculator from '../calculator/calculator';
import MapBranches from '../map-branches/map-branches';
import Promo from '../promo/promo';
import Services from '../services/services';

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <Services />
      <Calculator />
      <MapBranches />
    </main>
  );
};

export default Main;
