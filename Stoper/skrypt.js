var licz=0;
var minuta=0;
var godzina=0;
var interwal;
function stoper2()
{

    interwal = setInterval(stoper, 1000);

}


function stoper()
{  
        licz++;
        console.log(licz);
        document.getElementById("liczenie").innerHTML = licz;
    if (licz==60) {
    licz=0;
    minuta++;
    }
    document.getElementById("minuta").innerHTML = minuta;
    if (minuta==60) {
        minuta=0;
        godzina++;
        }
        document.getElementById("godzina").innerHTML = godzina;
}

function stop()
{
    clearInterval(interwal);
licz=0;
minuta=0;
godzina=0;

}

function pauza()
{
    clearInterval(interwal);
}

function miedzyczas()
{
    var miedzyczassek=licz;
    var miedzyczasmin=minuta;
    var miedzyczasgodz=godzina;
    document.getElementById("miedzyczasdiv").innerHTML = "Godziny: "+miedzyczasgodz+" Minuty: "+miedzyczasmin+" Sekundy: "+miedzyczassek;
}
