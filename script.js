var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorValue1, colorValue2;

var btn = document.createElement("button");
btn.innerHTML = "Random Gradient"
body.appendChild(btn);

function setRandomGradient(){

    colorValue1 = 'rgb(' + (Math.floor(Math.random() * 256))
     + ',' + (Math.floor(Math.random() * 256))
     + ',' + (Math.floor(Math.random() * 256)) + ')';

    colorValue2 = 'rgb(' + (Math.floor(Math.random() * 256))
    + ',' + (Math.floor(Math.random() * 256))
    + ',' + (Math.floor(Math.random() * 256)) + ')';

	body.style.background = 
	"linear-gradient(to right, " 
	+ colorValue1 
	+ ", " 
	+ colorValue2 
	+ ")";

	css.textContent = body.style.background + ";";

}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomGradient)