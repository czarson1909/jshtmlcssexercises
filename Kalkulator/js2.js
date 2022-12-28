//var zmienna = "jakis tam tekst ze zmiennej";
//document.write(zmienna);
function dodaj()
{
var wynik1 = document.getElementById("pole").value*1 + document.getElementById("pole2").value*1;
document.getElementById("test").innerHTML = wynik1;
}
function odejmij()
{
var wynik2 = document.getElementById("pole").value - document.getElementById("pole2").value;
document.getElementById("test").innerHTML = wynik2;
}
function pomnoz()
{
var wynik3 = document.getElementById("pole").value * document.getElementById("pole2").value;
document.getElementById("test").innerHTML = wynik3;
}
function podziel()
{
var wynik4 = document.getElementById("pole").value / document.getElementById("pole2").value;
if (wynik4==Infinity) alert("Nie wolno dzielić przez 0!");
else document.getElementById("test").innerHTML = wynik4;
}
