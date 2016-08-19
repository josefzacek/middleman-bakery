var map = L.map('map_holder').setView([53.349729, -6.260631], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([53.349729, -6.260631]).addTo(map)
  .bindPopup('Your local Bakery');

map.dragging.disable();
map.scrollWheelZoom.disable();
