// Get some handles to elements on the DOM
const toggleSwitch = document.querySelector(".switch");
const backgroundColorSwitch = document.querySelector(".light");
const textChg = document.querySelector("h1");


// Define state transformations
function toggleLight() {
  // If light is on, turn it off
 
  if (toggleSwitch.classList.contains("on")) {

    toggleSwitch.classList.remove("on");
    toggleSwitch.classList.add("off");

    backgroundColorSwitch.classList.remove("light");
    backgroundColorSwitch.classList.add("dark");

    textChg.innerHTML = "Hey, who turned off the lights?";

  } else {
    // Turning On
    toggleSwitch.classList.remove("off");
    toggleSwitch.classList.add("on");

    backgroundColorSwitch.classList.remove("dark");
    backgroundColorSwitch.classList.add("light");

    textChg.innerHTML = "It's so bright in here!";
  }

 
}

// Set up triggers for state changes
toggleSwitch.addEventListener("click", toggleLight);