function licz2()
{
var data = document.getElementById("1").value;
var dzisiejsza_data = document.getElementById("2").value;
console.log(data);
console.log(dzisiejsza_data);
var rok1 = data.substr(0,4)
var miesiacwyc = data.substr(5,7)
var miesiac1 = miesiacwyc.substr(0,2)
var dzien1 = data.substr(-2);
console.log(rok1);
console.log(miesiac1);
console.log(dzien1);
var rok2 = dzisiejsza_data.substr(0,4)
var miesiacwyc2 = dzisiejsza_data.substr(5,7)
var miesiac2 = miesiacwyc2.substr(0,2)
var dzien2 = dzisiejsza_data.substr(-2);
console.log(rok2);
console.log(miesiac2);
console.log(dzien2);
var roznicarok = rok2-rok1;
var roznicamiesiac = miesiac2-miesiac1;
var roznicadzien = dzien2-dzien1;
document.getElementById("a").innerHTML="Od wybranej daty upłynęło: "+roznicarok+" lat, "+roznicamiesiac+" miesięcy, "+roznicadzien+" dni.";
}