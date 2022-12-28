var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath()
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath()
ctx.arc(250, 100, 40, 0, Math.PI);
ctx.stroke();
ctx.beginPath()
ctx.arc(300, 100, 40, Math.PI, 2* Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30 px Arial";
ctx.fillText("Hello World", 100, 100);