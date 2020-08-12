function toDark() {
  var dark = document.querySelectorAll(".mode .dark");
var light = document.querySelectorAll(".mode .light");  //
var main = document.querySelectorAll(".main");
  setCookie("darkMode","true", 365);
  for (var i = 0; i<dark.length; i++) {
       dark[i].style.display = "none";
    }
    for (let j = 0; j<light.length; j++) {
       light[j].style.display = "inline";
    }
    for (let n = 0; n<main.length; n++) {
       main[n].style.background = "#1E1E1E";
    }
    	// console.log(getCookie("darkMode"));

}

function toLight() {
  var dark = document.querySelectorAll(".mode .dark");
var light = document.querySelectorAll(".mode .light");  //
var main = document.querySelectorAll(".main");
  setCookie("darkMode","false", 365);
  for (var i = 0; i<dark.length; i++) {
       dark[i].style.display = "inline";
    }
    for (let j = 0; j<light.length; j++) {
       light[j].style.display = "none";
    }
    for (let n = 0; n<main.length; n++) {
       main[n].style.background = "#ffffff";
    }
	// console.log(getCookie("darkMode"));

}

if (darkMode) {
  toDark();
} else {
  toLight();
}