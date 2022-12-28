function licz()
{
var cena = document.getElementById("1").value*1;
var osoby = document.getElementById("2").value*1;
var ocena = document.getElementById("3").value*1;
console.log("Cena wynosi: "+cena);
console.log("Liczba osób przy stoliku: "+osoby);
console.log("Ocena obsługi: "+ocena);
var napiwek = (cena+(ocena*cena))-cena;
var napiwekos = napiwek/osoby;
console.log(napiwek);
document.getElementById("a").innerHTML="Napiwek wynosi: "+Number(Math.round(napiwek+'e+2')+'e-2')+" zł.";
document.getElementById("b").innerHTML="Napiwek na jedną osobę wynosi: "+(Number(Math.round(napiwekos+'e+2')+'e-2'))+" zł.";
//document.getElementById("b").innerHTML="Napiwek na jedną osobę wynosi: "+napiwekos+Math.ceil((cena*ocena)/osoby)/100+" zł.";
}