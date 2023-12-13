var getal1 = document.getElementById("getal1").value;


function getal(){
for (let i = 0; i < 10; i++) {
    text1++;
    text2 = text1 * getal1;
    text3 += text1 + " x " + getal1 + "=" + text2 + "<br>";
    document.getElementById("text").innerHTML = text3;
    console.log("hello");
}
}


/*
function getal(){
    for (let i = 0; i < 10; i++) {
        text1++;
        text2=text1+"0"; 
        text3 += text1 + " x 10 =" + text2 + "<br>";
        document.getElementById("text").innerHTML = text3;
        console.log("hello");
    }
    }
    */