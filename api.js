// Constant variables
const api_key = '412cc56b397f24f503ff44a0e54dd8fe';
const api_url = 'https://api.openweathermap.org/data/2.5/weather?zip=12180&units=imperial&APPID='+api_key;

var weather_obj = {};

// Function to generate weather object
function getWeather() {
  // Create request object
  var xmlhttp = new XMLHttpRequest();

  // Ready State
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) { 
      if (xmlhttp.status == 200) {
        // Parse JSON file to JS Obj
        var weather_json = JSON.parse(xmlhttp.responseText);

        // Add fields to weather obj
        weather_obj.weather = weather_json["weather"][0]["main"];
        weather_obj.temp = weather_json["main"]["temp"];
      }
      
      else {
        // Handle API Error
        alert('Error with api call');
        return "Error";
      }
    }
  };

  // Get request for file
  xmlhttp.open("GET", api_url);
  xmlhttp.send();
}

// Submit Button Logic
function preventDefault(e) {
  // Get input text
  currName = document.getElementById('name');
  currEmail = document.getElementById('email');
  currTutor = document.getElementById('tutor');
  currLoc = document.getElementById('location');

  // Check for blank values
  if(currName.value !== "" && currEmail.value !== "" && currTutor.value !== "" && currLoc.value !== "") {
    // Check for outdoor
    if(currLoc.value === "2") {
      // Prevent form refresh
      e = e || window.event;
      e.preventDefault();

      // Insert data into modal
      document.getElementById('temp').textContent = "Temperature: " + weather_obj.temp;
      document.getElementById('weather').textContent = "Weather: " + weather_obj.weather;

      // Onclick handler
      document.getElementById('refresh').onclick = () => {
        // Refresh page
        location.reload();
      };
    }
  }

  // If there are fields not filled - error
  else {
    alert("Please fill out all of the fields");
  }
}

getWeather();