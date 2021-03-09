const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
printMinutes()
printSeconds()


}

function printMinutes() {
  var min = chronometer.splitClick() // renvoi une string ex - 10:15
  minDec.innerHTML = min[0]
  minUni.innerHTML = min[1]


}

function printSeconds() {
  var sec = chronometer.splitClick()
  secDec.innerHTML = sec[3]
  secUni.innerHTML = sec[4]
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop"  // ... your code goes here
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT"
  btnRight.className = "btn split"// ... your code goes here
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start"



}

function setResetBtn() {
  btnRight.innerHTML = "RESET"
  btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.innerHTML === "START") {
   // btnLeft.style.backgroundColor = "red"; 
   setStopBtn()
   setSplitBtn()
    chronometer.startClick(printTime);
  } else {

    setResetBtn()
    setStartBtn()
  }



});

// Reset/Split Button
btnRight.addEventListener('click', () => {



});