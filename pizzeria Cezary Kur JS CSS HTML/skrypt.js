function licz(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").checked;
    var out
    
    
    if(b==true){
        out="Dowieziemy twoją pizzę za darmo";
    }else{
        a*=2;
        out="Dowóz będzie cię kosztował "+a+" złotych";
    }
    
    
    document.getElementById("wynik").innerHTML=out;
    
    
    
    
    }