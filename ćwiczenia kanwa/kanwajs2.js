var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(0.5, "blue");
grd.addColorStop(0.75, "green");
grd.addColorStop(1, "black");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 250, 180);
