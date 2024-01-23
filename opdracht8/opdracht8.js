
//ids ophalen en er vars an maken
var geb = document.getElementById("geb").value;
var saldo = document.getElementById("saldo"+geb);
var saldo2 = 0;
var number = parseInt(document.getElementById("number").value);




//functie knop voor storten hier word de gebruiker opgehaald en de transactie text verzonden
function storten(){
    var geb = document.getElementById("geb").value;
    var number = parseInt(document.getElementById("number").value);
    const stuur = document.createElement("li");
    stuur.innerText = geb+" Storten:€"+number;
    document.body.appendChild(stuur);
    x = "s";
    saldof();
}

//functie knop voor opnemen hier word de gebruiker opgehaald en de transactie text verzonden
function opnemen(){
    var geb = document.getElementById("geb").value;
    var number = parseInt(document.getElementById("number").value);
    const stuur = document.createElement("li");
    //dit is voor als er meer geld probeer word opgenomen dan dat er is
    if(saldo2 < number){
        stuur.innerText = " Te weinig geld om op te nemen";
        document.body.appendChild(stuur);
    }
    else{
        console.log (number);
    stuur.innerText = geb+" Opnemen:€"+number;
    document.body.appendChild(stuur);
    x = "o";
    saldof();
    }
}



//de functie die de berekeningen doet en het saldo update
function saldof(){
    var number = parseInt(document.getElementById("number").value);
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