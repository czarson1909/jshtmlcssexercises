var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");

const rand = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
ctx.beginPath();
ctx.moveTo(0, c.height/2);
const step = 10;
const howMany = c.width / step;
for (let i=1; i<=howMany; i++) {
const y = c.height/2 + rand(-50, 50);
ctx.lineTo(i * step, y)
}
ctx.lineTo(c. width,c.height);
ctx.lineTo(0, c.height);
ctx.closePath();
ctx.fillStyle = "#000";
ctx.fill();