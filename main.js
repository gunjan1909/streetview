import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import MousePosition from "ol/control/MousePosition";
import * as coordinate from "ol/coordinate";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
//import * as PANOLENS from "panolens";

const coordinates = [
  [10.93376479, 50.98380407],
  [10.93377411, 50.98376802],
  [10.93378524, 50.9837232],
  [10.93378027, 50.98368124],
  [10.93373754, 50.98364982],
  [10.9336743, 50.983634],
  [10.93361004, 50.98363497],
  [10.93356273, 50.98366071],
  [10.93354303, 50.98370195],
  [10.93353315, 50.98374614],
];

const images = [
  "./Images/HMTpano_000001_000000.jpg",
  "./Images/HMTpano_000001_000001.jpg",
  "./Images/HMTpano_000001_000002.jpg",
  "./Images/HMTpano_000001_000003.jpg",
  "./Images/HMTpano_000001_000004.jpg",
  "./Images/HMTpano_000001_000005.jpg",
  "./Images/HMTpano_000001_000006.jpg",
  "./Images/HMTpano_000001_000007.jpg",
  "./Images/HMTpano_000001_000008.jpg",
  "./Images/HMTpano_000001_000009.jpg",
];

//reversing the array cuz i feel images are in reverse order acc. to map

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    constrainResolution: true,
    center: fromLonLat([10.93376479, 50.98380407]),
    zoom: 20,
  }),

  //using coordinates to show position in map
  controls: [
    new MousePosition({
      coordinateFormat: coordinate.createStringXY(4),
      projection: "EPSG:4326",
      className: "custom-mouse-position",
      target: document.getElementById("mouse-position"),
      undefinedHTML: "&nbsp;",
    }),
  ],
  //mark every location from coodrinates array
  overlays: coordinates.map((coordinate, index) => {
    const ele = document.createElement("div");
    ele.classList.add("spanspan");
    ele.innerHTML = index;
    //add onclick function to ele
    ele.addEventListener("click", (ele) => {
      showPano(ele);
    });
    return new Overlay({
      position: fromLonLat(coordinate),
      positioning: "center-center",
      element: ele,
      stopEvent: false,
    });
  }),
});

//showing image on clicking every spanspan div in div with id pano using panolens
/*const spanspans = document.querySelectorAll(".spanspan");
spanspans.forEach((spanspan, index) => {
  spanspan.addEventListener("click", () => {
    const panorama = PANOLENS.ImagePanorama(`${images[index]}`);
    const viewer = PANOLENS.Viewer({
      container: document.querySelector("#pano"),
      output: "console",
    });
    viewer.add(panorama);
  });
});*/
