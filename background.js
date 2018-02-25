function background(event) {
	var x = event.clientX;
	var y = event.clientY;
	var position = (x/window.innerWidth)*100; // make this x-related
	var size = (y/window.innerHeight)*100; // make this y-related
	document.getElementById("thediv").style.background = "radial-gradient(farthest-corner at " + position + "% " + size + "%, rgb(255,255,204), rgb(255, 204, 204))"; //light
	//document.getElementById("thediv").style.background = "radial-gradient(farthest-corner at " + position + "% " + size + "%,  rgb(255, 204, 102), rgb(255, 153, 153))"; //capri sun
}