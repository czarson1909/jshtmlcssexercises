function licz(){
var x=document.getElementById("x").value;
var y=document.getElementById("y").checked;
var koszta=x*100;
if(y==true){
    koszta*=1.3;
}
var out="Koszt twojego wesela to: "+koszta;
document.getElementById("koszt").innerHTML=out;
}




