const api_key = '412cc56b397f24f503ff44a0e54dd8fe';
const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=12180&units=imperial&APPID=${api_key}`;

var weather_obj = {};

function getWeather() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) { 
      if (xmlhttp.status == 200) {
        var weather_json = JSON.parse(xmlhttp.responseText);

        weather_obj.weather = weather_json["weather"][0]["main"];
        weather_obj.temp = weather_json["main"]["temp"];
      }
      
      else {
        alert('Error with api call');
        return "Error";
      }
    }
  };

  xmlhttp.open("GET", api_url);
  xmlhttp.send();
}

getWeather();
console.log(weather_obj);