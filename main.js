var canvas = document.getElementById("myCanvas");

//is our canvas going to be 2D or 3D?
var context = canvas.getContext("2d");

//Filling our brush with color:
context.strokeSyle = "red";

//what will the color of the canvas fill be?
context.fillRect(10, 10, 100, 100);
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.strokeRect(10, 10, 100, 100);









    