var map = L.map('map_holder').setView([53.3498, -6.2603], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([53.3498, -6.2603]).addTo(map)
  .bindPopup('Dublin, capital of the Republic of Ireland');

map.dragging.disable();
map.scrollWheelZoom.disable();
