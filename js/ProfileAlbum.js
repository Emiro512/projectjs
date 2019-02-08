import {renderMainContent, mainContent, allAlbsCont} from './mainContent'
import {albums} from "./albums";
import {appElem, DG, wrapper} from "./utilites";

export let currAlb,sliderContainer, profileMapContainer
export let renderProfileAlbum = (event) => {
    mainContent.remove()
    allAlbsCont.remove()
    currAlb = albums.find(
        function (alb) {
            return alb.name === event.target.innerText
        }
    )
    let address = currAlb.address
    sliderContainer = appElem("section", wrapper)
    sliderContainer.className = "slider_container"
    let slider = appElem("picture-slider", sliderContainer)
    slider.className = "slider"
    profileMapContainer = appElem("section", wrapper)
    profileMapContainer.className = "profile_map_container"
    let setCurrMap = (currAlbMap) => {
        let geoLon, geoLat;
        DG.Geocoder2.get(address, {
            types: ['city', 'building', 'district', 'street', 'living_area', 'place', 'house'],
            limit: 10,
            success: function (geocoderObjects) {
                for (var i = 0, len = geocoderObjects.length; i < len; i++) {
                    var geocoderObject = geocoderObjects[i];
                    geoLon = geocoderObject.getCenterGeoPoint().getLon()
                    geoLat = geocoderObject.getCenterGeoPoint().getLat()
                }
                currAlbMap = DG.map(profileMapContainer,{
                    'center':[geoLat,geoLon],
                    'zoom': 12
                })
                DG.marker([geoLat, geoLon]).addTo(currAlbMap);
            },
        });
    }
    setCurrMap()
}

export let removeProfileAlbum = (event) => {
    sliderContainer.remove()
    profileMapContainer.remove()
    mainContent.remove()
    allAlbsCont.remove()
    renderMainContent()
}
