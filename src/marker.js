import mapboxgl from "mapbox-gl";

const iconURLs = {
  hotels: "http://i.imgur.com/WbMOfMl.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

function buildMarker () {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  return new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
}

export default buildMarker;