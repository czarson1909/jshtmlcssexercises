var klik=0;
var klik2=0;
function pokaz()
{
    if (klik==0) {
        klik++;
console.log("POKAZ_check");

var diw = document.createElement("div");
diw.id="diw";


var zapisz_button = document.createElement("input");
zapisz_button.type = "button";
zapisz_button.id = "zapisywanie";
zapisz_button.value = "WYPISZ DANE";
diw.appendChild(zapisz_button);
zapisz_button.onclick = zapisz;


//imie,nazwisko,mail,tel
var imie = document.createElement("input");
imie.value = "Imię: ";
imie.id="imie";
diw.appendChild(imie);

var nazwisko = document.createElement("input");
nazwisko.value = "Nazwisko: ";
nazwisko.id="nazwisko";
diw.appendChild(nazwisko);

var mail = document.createElement("input");
mail.value = "Adres e-mail: ";
mail.id="mail";
diw.appendChild(mail);

var tel = document.createElement("input");
tel.value = "Numer telefonu: ";
tel.id="tel";
diw.appendChild(tel);

document.body.appendChild(diw);
    }
}

function usun()
{
    klik=0;
    klik2=0;
console.log("USUN_check");
var usuwanie = document.querySelector("#diw");
usuwanie.remove();


}

function zapisz()
{
    if (klik2==0) {
        klik2++;
var all_zapisane = document.querySelector("#diw");
console.log(all_zapisane);
var imie_zapisane = document.querySelector("#imie");
var nazwisko_zapisane = document.querySelector("#nazwisko");
var email_zapisane = document.querySelector("#mail");
var tel_zapisane = document.querySelector("#tel");
console.log(imie_zapisane.value);
console.log(nazwisko_zapisane.value);
console.log(email_zapisane.value);
console.log(tel_zapisane.value);
var imie2 = document.createElement("input");
imie2.value = imie_zapisane.value;
imie2.id="imie2";
diw.appendChild(imie2);

var nazwisko2 = document.createElement("input");
nazwisko2.value = nazwisko_zapisane.value;
nazwisko2.id="nazwisko2";
diw.appendChild(nazwisko2);

var mail2 = document.createElement("input");
mail2.value = email_zapisane.value;
mail2.id="mail2";
diw.appendChild(mail2);

var tel2 = document.createElement("input");
tel2.value = tel_zapisane.value;
tel2.id="tel2";
diw.appendChild(tel2);
    }
}


function przyciski()
{
var diwglowny = document.createElement("div");
diwglowny.id="diwglowny";

var pokaz_button = document.createElement("input");
pokaz_button.type = "button";
pokaz_button.id = "pokazywanie";
pokaz_button.value = "POKAŻ";
diwglowny.appendChild(pokaz_button);
pokaz_button.onclick = pokaz;

var usun_button = document.createElement("input");
usun_button.type = "button";
usun_button.id = "usuwanie";
usun_button.value = "USUŃ";
diwglowny.appendChild(usun_button);
usun_button.onclick = usun;
document.body.appendChild(diwglowny);
}

