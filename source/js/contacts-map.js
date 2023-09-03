const initContactsMap = (id) => {
  const OFFICE_COORDINATES = [59.938631, 30.323037];

  const init = () => {
    const locationMap = new ymaps.Map(id, { // eslint-disable-line
      center: OFFICE_COORDINATES,
      zoom: 15,
      controls: []
    });

    const officeMarker = new ymaps.Placemark(OFFICE_COORDINATES, {}, { // eslint-disable-line
      iconLayout: 'default#image',
      iconImageHref: 'img/icons.svg#map_marker',
      iconImageSize: [36, 36],
      iconImageOffset: [-18, -18]
    });

    locationMap.geoObjects.add(officeMarker);
  };

  ymaps.ready(init); // eslint-disable-line
};

export { initContactsMap };
