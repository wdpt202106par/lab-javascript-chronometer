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
  const strtime = chronometer.splitClick().split(':'); // ['09', '12']

  const mm = strtime[0]; // '09'
  minDec.innerHTML = mm[0];
  minUni.innerHTML = mm[1];
}

function printSeconds() {
  const strtime = chronometer.splitClick().split(':'); // ['09', '12']

  const ss = strtime[1]; // '12'
  secDec.innerHTML = ss[0];
  secUni.innerHTML = ss[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // create a new li
  const $li = document.createElement('li');
  $li.innerHTML = chronometer.splitClick()
  
  // append it to ul
  splits.appendChild($li)
}

function clearSplits() {
  // reset the watch
  chronometer.resetClick()
  printTime()

  // reset the splits
  splits.innerHTML = ''
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    clearSplits()
  } else {
    printSplit()
  }
});
