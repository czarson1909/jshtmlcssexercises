function szukanie()
{
const szukane = document.getElementById("szukaj").value;
const napis = document.getElementById("tekst").innerHTML;
console.log(szukane);
console.log(napis);
const liczbaznakow = napis.length;
console.log(liczbaznakow);
for (var powtorz=0; powtorz<liczbaznakow; powtorz++) {
const wyszukane = napis.replace(szukane, "<span style='color: blue'>"+szukane+"</span>");  
document.getElementById("tekst").innerHTML = wyszukane;
}




}