var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
const rand2 = function(min, max) {
return Math.floor(Math.random()*(max-min+1)+min);
}

const gradient = ctx.createLinearGradient(0, 0, c.width, c.height);
gradient.addColorStop(0, "blue");
gradient.addColorStop(0.2, "dodgerblue");
gradient.addColorStop(0.5, "springgreen");
gradient.addColorStop(1, "orangered");
ctx.strokeStyle= gradient;

for (let i=0; i<50; i++){
    ctx.beginPath();
    const x = rand2(20, c.width - 20)
    const y = rand2(20, c.height - 20)
    const r = rand2(10, 100);
    const lineW = rand2(1, 10);
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.lineWidth = lineW;
    ctx.stroke();
}