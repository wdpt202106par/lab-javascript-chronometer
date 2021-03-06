class Chronometer {
  currentTime = 0;
  intervalId = 0;
  constructor() {



  }
  startClick(callback) {
    setInterval(function () {
      callback = `${}`
      currentTime++;
    }, 1)
  }
  getMinutes() {
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}