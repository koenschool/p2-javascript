
let text1 = "";
let text2 = "";
let text3 = "";

for (let i = 0; i < 100; i++) {
    text1++;
    text2=text1+"0"; 
    text3 += text1 + " x 10 =" + text2 + "<br>";
    document.getElementById("text").innerHTML = text3;
    console.log("hello");
}
