
mapboxgl.accessToken = mapToken;

const campgroundData = JSON.parse(document.getElementById('map-data').dataset.campground);
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: campgroundData.geometry.coordinates, // starting position [lng, lat]
	zoom: 10, // starting zoom
});

const popup = new mapboxgl.Popup({ offset: 25 })
	.setHTML(`<h3>${campgroundData.title}</h3>`);

new mapboxgl.Marker()
	.setLngLat(campgroundData.geometry.coordinates)
	.setPopup(popup)
    .addTo(map)