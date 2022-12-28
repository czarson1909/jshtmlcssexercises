function guzik1()
{
    var a = prompt("Podaj 1. liczbę");
    var b = prompt("Podaj 2. liczbę");
    var c = a*1 + b*1;
    alert("Wynikiem dodawania jest: "+c);
}
function guzik2()
{
    var a = prompt("Podaj 1. liczbę");
    var b = prompt("Podaj 2. liczbę");
    var c = a*1 - b*1;
    alert("Wynikiem odejmowania jest: "+c);
}
function guzik3()
{
    var a = prompt("Podaj 1. liczbę");
    var b = prompt("Podaj 2. liczbę");
    var c = a*1 * b*1;
    alert("Wynikiem mnożenia jest: "+c);
}
function guzik4()
{
    var a = prompt("Podaj 1. liczbę");
    var b = prompt("Podaj 2. liczbę");
    if (b==0) alert("Nie wolno dzielić przez 0");
    else 
    { 
            var c = a*1 / b*1;
            alert("Wynikiem dzielenia jest: "+c);
    }
}
function guzik5()
{
    var a = prompt("Podaj a");
    var b = prompt("Podaj b");
    var c = prompt("Podaj c");
   
    var a = a*1;
    var b = b*1;
     if(b>0) b = "+"+b;
    var c = c*1;
    if(c>0) c = "+"+c;
    var d = (b*b) - (4*a*c);
    d = d*1;
    var pd = Math.sqrt(d);
    document.write(a+"x"+"<sup>2</sup>"+b+"x"+c);
    alert("Delta wynosi: "+d);
    if (d>0) {
         alert("Pierwiastek z delty wynosi: "+pd);
    } else if (d<0) alert("Brak pierwiastków");
    if (d>0)
    {
var m1, m2;
m1 = (-b-pd)/2*a
m2 = (-b+pd)/2*a       
alert("1. miejsce zerowe: "+m1);
alert("2. miejsce zerowe: "+m2);
    } 
    if (d==0)
    {
var mz;
mz = (-b)/2*a
alert("Miejsce zerowe wynosi: "+mz);
    } 
}
function guzik6()
{
var promien = prompt("Podaj promien okregu");
promien = promien*1;
var obwod = 2*Math.PI*promien;
var pole = Math.PI*(promien*promien);
alert("Obwód koła wynosi: "+obwod);
alert("Pole koła wynosi: "+pole);

}