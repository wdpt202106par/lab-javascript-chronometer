class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback()
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60; // rest of the division by 60
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`; // add a 0
    } else {
      return `${num}`;  // just convert to a string
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const mm = this.twoDigitsNumber(this.getMinutes());
    const ss = this.twoDigitsNumber(this.getSeconds());

    return `${mm}:${ss}`;
  }
}
