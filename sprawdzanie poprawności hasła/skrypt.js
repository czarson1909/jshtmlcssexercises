function przycisk()
{
document.getElementById("wyjscie").innerHTML = " ";
document.getElementById("wyjscie2").innerHTML = " ";
            document.getElementById("wyjscie").innerHTML += "Sprawdzanie wymogów dla całego hasła:";
            document.getElementById("wyjscie").innerHTML += "<br>";
            const haslo = document.getElementById("haselko").value;
            document.getElementById("wyjscie").innerHTML += "hasło: " + haslo;
            document.getElementById("wyjscie").innerHTML += "<br>";
if (haslo.length <=4)
{
    document.getElementById("wyjscie").innerText += " | za krótkie hasło | ";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
else if (haslo.length >= 5 && haslo.length <= 7)
{
    document.getElementById("wyjscie").innerHTML += " | hasło powinno być dłuższe | ";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
 if (haslo.length >= 8)
{
    document.getElementById("wyjscie").innerHTML += " | hasło wystarczające | ";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
 if (!haslo.match(/[A-Z]/)) 
{
    document.getElementById("wyjscie").innerHTML += " | hasło musi zawierać minimum jedną dużą literę |";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
 if (!haslo.match(/[a-z]/)) 
{
    document.getElementById("wyjscie").innerHTML += " | hasło musi zawierać minimum jedną małą literę |";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
 if (!haslo.match(/\d+/)) 
{
    document.getElementById("wyjscie").innerHTML += " | hasło musi zawierać minimum jedną cyfrę | ";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
 if (!haslo.match(/.[!,@,#,$,%,^,&,*,?,_,~]/))
{
    document.getElementById("wyjscie").innerHTML += " | hasło musi zawierać minimum jeden znak specjalny | ";
    document.getElementById("wyjscie").innerHTML += "<br>";
}
var ha = haslo.length;
var a = ha/2;
var b = a + 1;
document.getElementById("wyjscie").innerHTML += "<br>";
document.getElementById("wyjscie").innerHTML += "<br>";
document.getElementById("wyjscie").innerHTML += "<br>";
document.getElementById("wyjscie").innerHTML += "Sprawdzanie wymogów dla połowy hasła:";
if (ha%2==!0)
{
   const haslo2 = haslo.slice(0,b);
   document.getElementById("wyjscie2").innerHTML = "<br>";
    document.getElementById("wyjscie2").innerHTML += "połowa hasła: " + haslo2;
    document.getElementById("wyjscie2").innerHTML += "<br>";
    if (haslo2.length <=4)
{
    document.getElementById("wyjscie2").innerText += " | za krótkie hasło | ";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}
else if (haslo2.length >= 5 && haslo2.length <= 7)
{
    document.getElementById("wyjscie2").innerHTML += " | hasło powinno być dłuższe | ";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}
 if (haslo2.length >= 8)
{
    document.getElementById("wyjscie2").innerHTML += " | hasło wystarczające | ";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}
 if (!haslo2.match(/[A-Z]/)) 
{
    document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jedną dużą literę |";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}
 if (!haslo2.match(/[a-z]/)) 
{
    document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jedną małą literę |";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}
 if (!haslo2.match(/\d+/)) 
{
    document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jedną cyfrę | ";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}
 if (!haslo2.match(/.[!,@,#,$,%,^,&,*,?,_,~]/))
{
    document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jeden znak specjalny | ";
    document.getElementById("wyjscie2").innerHTML += "<br>";
}}
else {
    const haslo2 = haslo.slice(0,a);
    document.getElementById("wyjscie2").innerHTML += "połowa hasła: " + haslo2;
    document.getElementById("wyjscie2").innerHTML += "<br>";
    if (haslo2.length <=4)
    {
        document.getElementById("wyjscie2").innerText += " | za krótkie hasło | ";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
    else if (haslo2.length >= 5 && haslo2.length <= 7)
    {
        document.getElementById("wyjscie2").innerHTML += " | hasło powinno być dłuższe | ";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
     if (haslo2.length >= 8)
    {
        document.getElementById("wyjscie2").innerHTML += " | hasło wystarczające | ";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
     if (!haslo2.match(/[A-Z]/)) 
    {
        document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jedną dużą literę |";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
     if (!haslo2.match(/[a-z]/)) 
    {
        document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jedną małą literę |";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
     if (!haslo2.match(/\d+/)) 
    {
        document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jedną cyfrę | ";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
     if (!haslo2.match(/.[!,@,#,$,%,^,&,*,?,_,~]/))
    {
        document.getElementById("wyjscie2").innerHTML += " | hasło musi zawierać minimum jeden znak specjalny | ";
        document.getElementById("wyjscie2").innerHTML += "<br>";
    }
}
}