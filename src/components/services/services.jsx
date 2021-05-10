import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Service from '../service/service';
import { SERVICES } from '../../const';
import SliderBullet from '../slider-bullet/slider-bullet';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (evt) => {
    setActiveTab(Number(evt.currentTarget.dataset.indexTab));
  };

  const onSlideChange = (index) => {
    setActiveTab(index);
  };

  const servicesItems = SERVICES.map((item, index) => {
    return <Service key={index} {...item} />;
  });

  const tabItems = SERVICES.map((item, index) => (
    <button
      key={index}
      onClick={onTabClick}
      className={`services__tab ${
        index === activeTab && `services__tab--active`
      }`}
      type="button"
      data-index-tab={index}
    >
      <span className={`services__lable services__lable${item.mod}`}>
        {item.lable}
      </span>
    </button>
  ));

  return (
    <section className="services">
      <h2 className="visually-hidden">Услуги банка</h2>
      <div className="services__tabs">{tabItems}</div>
      <Carousel
        selectedItem={activeTab}
        onChange={onSlideChange}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        dynamicHeight
        renderIndicator={(_onClickHandler, isSelected, index) => (
          <SliderBullet isSelected={isSelected} index={index} />
        )}
      >
        {servicesItems}
      </Carousel>
    </section>
  );
};

export default Services;
