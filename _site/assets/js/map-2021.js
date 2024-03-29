//leaflet
var map = L.map("map").setView(
  [Math.floor(Math.random() * -30) + 20, Math.random() * 90 + 30],
  4
);

L.tileLayer("maps/map2021/{z}/{x}/{y}.jpg", {
  maxZoom: 6,
  minZoom: 3,
  continuousWorld: false,
  controls: true,
  noWrap: true,
}).addTo(map);
