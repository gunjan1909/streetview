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

/*const pano = document.getElementById("pano");
const panorama = new PANOLENS.ImagePanorama(images[0]);
const viewer = new PANOLENS.Viewer({
  container: pano,
});
viewer.add(panorama);*/

//const spanspans = document.querySelectorAll(".spanspan");
//console.log(spanspans);
/*spanspans.forEach((spanspan, index) => {
  spanspan.addEventListener("click", () => {
    console.log(images[index]);
    const panorama = new PANOLENS.ImagePanorama(images[index]);
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#pano"),
    });
    viewer.add(panorama);
  });
});*/

function showPano(ele) {
  //console.log("clicked", ele.target.innerHTML);
  let index = ele.target.innerHTML;
  let panorama = new PANOLENS.ImagePanorama(images[index]);
  document.querySelector("#pano").innerHTML = "";
  let viewer = new PANOLENS.Viewer({
    container: document.querySelector("#pano"),
  });
  viewer.add(panorama);
}

//export the function
export { showPano };
