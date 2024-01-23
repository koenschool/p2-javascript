var geb = document.getElementById("geb").value;
var saldo = document.getElementById("saldo"+geb);
var saldo2 = 0;
var number = parseInt(document.getElementById("number").value);





function storten(){
    var geb = document.getElementById("geb").value;
    var number = parseInt(document.getElementById("number").value)
    const stuur = document.createElement("li");
    stuur.innerText = geb+"Storten:€"+number;
    document.body.appendChild(stuur);
    x = "s";
    saldof();
}


function opnemen(){
    var geb = document.getElementById("geb").value;
    var number = parseInt(document.getElementById("number").value)
    const stuur = document.createElement("li");
    if(saldo2 < number){
        stuur.innerText = "Te weinig geld om op te nemen";
        document.body.appendChild(stuur);
    }
    else{
        console.log (number);
    stuur.innerText = geb+"Opnemen:€"+number;
    document.body.appendChild(stuur);
    x = "o";
    saldof();
    }
}

function saldof(){
    var geb = document.getElementById("geb").value;
    var saldo = document.getElementById("saldo"+geb);
    if(x == "s"){
        saldo2 = saldo2 + number;
        saldo.innerHTML = "Huidig Saldo: "+saldo2+" Euro";
    }
    else if(x == "o"){
        saldo2 -= number;
        saldo.innerHTML = "Huidig Saldo: "+saldo2+" Euro";
    }
}