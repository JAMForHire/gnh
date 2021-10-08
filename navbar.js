// Toggle Nav Function to add or remove responsive nav
function toggle_nav() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    // Add responsive
    x.className += " responsive";
  } 
  
  else {
    // Add normal
    x.className = "topnav";
  }
}