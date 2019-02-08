export let appElem = ( tagName, container ) =>
    ( container ? container : document.body )
        .appendChild ( document.createElement ( tagName ) )

export let wrapper = appElem( "div" )
wrapper.className = "wrapper"

export let DG = require('2gis-maps');

export let setPins = (query, layer) => {
    let geoLon, geoLat;
    DG.Geocoder2.get(query, {
        types: ['city', 'building', 'district', 'street', 'living_area', 'place', 'house'],
        limit: 10,
        success: function (geocoderObjects) {
            for (var i = 0, len = geocoderObjects.length; i < len; i++) {
                var geocoderObject = geocoderObjects[i];
                geoLon = geocoderObject.getCenterGeoPoint().getLon()
                geoLat = geocoderObject.getCenterGeoPoint().getLat()
            }
            DG.marker([geoLat, geoLon]).addTo(layer);
        },
    });
}


