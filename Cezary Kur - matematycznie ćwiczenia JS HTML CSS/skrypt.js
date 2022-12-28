function liczbunia(){
    var a = prompt("Podaj liczbę całkowitą")
    if(a>0){
        document.getElementById("licz").innerHTML = "Liczba "+a+" jest dodatnia";
    }
    else if(a<0){
        document.getElementById("licz").innerHTML = "Liczba "+a+" jest ujemna";
    }
    else if(a==0){
        document.getElementById("licz").innerHTML = "Liczba "+a+" to zero";
    }
}
function zakresik(){
    var a = prompt("Podaj liczbę początkową");
    var b = prompt("Podaj liczbę końcową");
    const tab = [];
    if(a<b){
        
        for(var i=a;i<=b;i++){
            tab[i] = i;
            console.log(tab[i]);
            
                document.getElementById("zakr").innerHTML += (tab[i]+" ");
            
            
        }
    }
    if(b<a){
        
        for(var i=a;i>=b;i--){
            tab[i] = i;
            console.log(tab[i]);
            document.getElementById("zakr").innerHTML += (tab[i]+" ");
        }
    }
}