let sliderLeft=document.getElementById("min-range");
let sliderRight=document.getElementById("max-range");
let inputMin=document.getElementById("min-cost");
let inputMax=document.getElementById("max-cost");

///value update from input to slider
//function input update to slider
function sliderLeftInput(){ //input update slider left
  sliderLeft.value=inputMin.value;
}
function sliderRightInput(){ //input update slider right
  sliderRight.value=(inputMax.value); //change in input max updated in slider right
}

//calling function on change of inputs to update in slider
inputMin.addEventListener("change",sliderLeftInput);
inputMax.addEventListener("change",sliderRightInput);

///value update from slider to input
//functions to update from slider to inputs
function inputMinSliderLeft(){ //slider update inputs
  inputMin.value=sliderLeft.value;
}
function inputMaxSliderRight(){//slider update inputs
  inputMax.value=sliderRight.value;
}
sliderLeft.addEventListener("change",inputMinSliderLeft);
sliderRight.addEventListener("change",inputMaxSliderRight);
// -------------------------------------------------------
// Get the modal
const modal = document.getElementById('appointment-modal');

// Get the button that opens the modal
const btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
