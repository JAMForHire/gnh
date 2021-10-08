const api_key = '412cc56b397f24f503ff44a0e54dd8fe';
const api_url = 'https://api.openweathermap.org/data/2.5/weather?zip=12180&units=imperial&APPID='+api_key;

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

function preventDefault(e) {
  currName = document.getElementById('name');
  currEmail = document.getElementById('email');
  currTutor = document.getElementById('tutor');
  currLoc = document.getElementById('location');

  if(currName.value !== "" && currEmail.value !== "" && currTutor.value !== "" && currLoc.value !== "") {
    console.log(currLoc.value);
    if(currLoc.value === "2") {
      e = e || window.event;
      e.preventDefault();

      document.getElementById('temp').textContent = "Temperature: " + weather_obj.temp;
      document.getElementById('weather').textContent = "Weather: " + weather_obj.weather;

      document.getElementById('refresh').onclick = () => {
        location.reload();
      };
    }
  }

  else {
    alert("Please fill out all of the fields");
  }
}

getWeather();