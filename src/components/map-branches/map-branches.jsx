import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { PLACEMARKS, MapSetting, PlacemarkSetting } from '../../const';

import MapTablet from '../../img/map-tablet.png';
import MapDesktop from '../../img/map-desktop.png';

const MapBranches = () => {
  return (
    <section className="map" id="map">
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

export default MapBranches;
