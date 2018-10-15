//import noUiSlider from "nouislider";

// this script will activate a range selector on every .nouirange element with a specific html structure with valid input. Options like minand max are taken from the html attributes.
document.querySelectorAll('.range-slider').forEach(function (el) {
  let htmlinsert = document.createElement('div');
  let realmininput = el.querySelector('.min');
  let realmaxinput = el.querySelector('.max');
  realmininput.style.display = "none ";
  realmaxinput.style.display = "none ";
  let min = realmininput.getAttribute('min');
  let max = realmaxinput.getAttribute('max');
  let steps = realmaxinput.getAttribute('step');
  let snapValues = [
    document.getElementById('min-cost'),
    document.getElementById('max-cost')
    ];
  el.appendChild(htmlinsert);

  noUiSlider.create(htmlinsert, {
    start: [realmininput.value, realmaxinput.value],
    connect: true,
    step: Number(steps),
    range: {
      'min': Number(min),
      'max': Number(max)
    }
  });

  htmlinsert.noUiSlider.on('update', function( values, handle ) {
    snapValues[handle].innerHTML = values[handle];
  });

  htmlinsert.noUiSlider.on('change', function (values) {
    realmininput.value = String(values[0]);
    realmaxinput.value = String(values[1]);
  });
});


//---------- FORM SENDING ------ //
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  console.log(element.tagName);
  if (element.tagName == "INPUT" && element.name != "") {
    data[element.name] = element.value;
  }
  return data;


}, {});

document.querySelector("form").addEventListener('submit', function (ev) {
  ev.preventDefault();
  var data = formToJSON(this);
  console.log(data);
  // Perform you ajax send here.
});

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
