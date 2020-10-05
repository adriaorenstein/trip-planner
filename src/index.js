import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWFvIiwiYSI6ImNrZndwem40ZTF0cDkyem84aXF0YW9panMifQ.NXZPsCsGyOB5NvHV1mb_aw';

const map = new mapboxgl.Map ({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})

const marker = buildMarker(); // or [-87.6354, 41.8885]
marker.addTo(map);