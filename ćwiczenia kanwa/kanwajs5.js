const angleToRadian = function(angle) {
    return Math.PI/180 * angle;
}
{
const parentCnt = document.getElementById("divek");
const generate = function(range){
range = Number(range);
const canvas = parentCnt.getElementById("MyCanvas5");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, MyCanvas5.width, MyCanvas5.height);
ctx.beginPath();
ctx.arc(MyCanvas5.width /2, MyCanvas5.height /2, 70, 0, angleToRadian(range));
ctx.lineWidth = 3;
ctx.stroke();
};

const range = parentCnt.querySelector("input[type=range]");

generate(range.value);

range.addEventListener("input", function() {
    generate(range.value);
});
}