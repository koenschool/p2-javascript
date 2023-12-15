function begin(){
    document.getElementById("begin").remove();
    game();
}

function game(){
    const tijd = Math.floor(Math.random() * 10000);
    setTimeout(haalweg, tijd);
    
}

i=0;
function timer2(){
        i++;
        document.getElementById("timer").innerHTML = i+"0";
        console.log("yeash")
}





function haalweg(){
    document.getElementById("rood").remove();
    interval = setInterval(timer2);
}

function klaar(){
    clearInterval(interval);
    document.getElementById("groen").remove();
    document.getElementById("timer").innerHTML = "Je er " + i + "0" + " miliseconde over.";
}