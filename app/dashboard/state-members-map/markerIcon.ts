import L from 'leaflet';
import markerIcon from '/marker.png';
import markerIcon2x from '/marker-2x.png';
import markerShadow from '/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: '/marker.png',
  iconRetinaUrl: '/marker-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export { DefaultIcon };