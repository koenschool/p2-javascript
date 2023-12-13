function steen(){
    getal = Math.floor(Math.random() * 3 + 1);
    if(getal==1){
        document.getElementById("getal").innerHTML = "jij deed 🪨 en de tegenstander deed 🪨 dus het is gelijk";
    }
    else if(getal==2){
        document.getElementById("getal").innerHTML =  "jij deed 🪨 en de tegenstander deed 📃 dus je hebt verloren";
    }
    else if(getal==3){
        document.getElementById("getal").innerHTML =  "jij deed 🪨 en de tegenstander deed ✂️ dus je hebt gewonnen";
    }
    
}

function papier(){
    getal = Math.floor(Math.random() * 3 + 1);
    if(getal==1){
        document.getElementById("getal").innerHTML = "jij  deed 📃 en de tegenstander deed 📃 dus het is gelijk";
    }
    else if(getal==2){
        document.getElementById("getal").innerHTML =  "jij  deed 📃 en de tegenstander deed ✂️ dus je hebt verloren";
    }
    else if(getal==3){
        document.getElementById("getal").innerHTML =  "jij  deed 📃 en de tegenstander deed 🪨 dus je hebt gewonnen";
    }
}

function schaar(){
    getal = Math.floor(Math.random() * 3 + 1);
    if(getal==1){
        document.getElementById("getal").innerHTML = "jij  deed ✂️ en de tegenstander deed ✂️ dus het is gelijk";
    }
    else if(getal==2){
        document.getElementById("getal").innerHTML =  "jij  deed ✂️ en de tegenstander deed 🪨 dus je hebt verloren";
    }
    else if(getal==3){
        document.getElementById("getal").innerHTML =  "jij  deed ✂️ en de tegenstander deed 📃 dus je hebt gewonnen";
    }
}