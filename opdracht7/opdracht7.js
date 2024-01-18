var api = "https://api.openweathermap.org/data/2.5/weather?lat=52.522906&lon=5.506718&appid=3eca4b06f91aeff3583a7dabe025a074"


var arraywe=["main", "description"]
var arrayma=["temp", "feels_like", "temp_min", "temp_max", "humidity"]
var arraywi=["speed","deg","gust"]


async function fetchinfo(object,type) {
    var response = await fetch(api);
    var json = await response.json();
    var text=json[object].type;
    const stuur = document.createElement("p");
    stuur.innerText = text;
    document.body.appendChild(stuur);
    return json;
  }


function update(){
    updatewe();
    updatema();
    updatewi();
}


function updatewe(){
    for (i = 0; i < arraywe.length; i++) {
        te1 = arraywe[i];
        fetchinfo("weather",te1);
    }

}

function updatema(){
    for (i = 0; i < arrayma.length; i++) {
        te2 = arrayma[i];
        fetchinfo("main",te2);
    }

}
function updatewi(){
    for (i = 0; i < arraywi.length; i++) {
        te3 = arraywi[i];
        fetchinfo("wind",te3);
    }

}


