import React from 'react';
// import { MapSetting, PlacemarkSetting } from '../../utils/const';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import MapTablet from '../../img/map-tablet.png';
import MapDesktop from '../../img/map-desktop.png';

const YandexMap = () => {
  const CoordinatesCities = {
    MOSCOW: [55.755814, 37.617635],
    SARATOV: [51.533557, 46.034257],
    KAZAN: [55.796127, 49.106405],
    TYMEN: [57.152985, 65.541227],
    OMSK: [54.989342, 73.368212],
    SURGUT: [61.254035, 73.396221],
  };

  const PLACEMARKS = [
    CoordinatesCities.MOSCOW,
    CoordinatesCities.SARATOV,
    CoordinatesCities.KAZAN,
    CoordinatesCities.TYMEN,
    CoordinatesCities.OMSK,
    CoordinatesCities.SURGUT,
  ];

  const MapSetting = {
    COORDINATES: [58.847263, 70.301885],
    ZOOM: 5,
  };

  const PlacemarkSetting = {
    ICON_LAYOUT: 'default#image',
    IMAGE: 'img/map-pin.svg',
    SIZE: [35, 42],
    OFFSETS: [-17, -38],
  };

  return (
    <section className="map">
      <h2 className="map__title">Отделения Лига Банка</h2>
      <div className="map__branches-wrapper">
        <picture className="map__branches-picture">
          <source media="(max-width:767px)" srcSet={MapTablet} />
          <img
            className="map__branches-picture-image"
            src={MapDesktop}
            alt="Отделения Лига Банка"
            width="1170"
            height="462"
          />
        </picture>
        <YMaps>
          <Map
            defaultState={{
              center: MapSetting.COORDINATES,
              zoom: MapSetting.ZOOM,
            }}
            className="map__branches-map"
          >
            {PLACEMARKS.map((item, index) => (
              <Placemark
                key={`mark-${index}`}
                geometry={item}
                options={{
                  iconLayout: PlacemarkSetting.ICON_LAYOUT,
                  iconImageHref: PlacemarkSetting.IMAGE,
                  iconImageSize: PlacemarkSetting.SIZES,
                  iconImageOffset: PlacemarkSetting.OFFSETS,
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default YandexMap;
