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
   let min=Math.floor(this.currentTime/60);
    return min;

  }
  getSeconds() {
    let sec=this.currentTime%60;
    return sec;
  }
  twoDigitsNumber() {
    let min=Math.floor(this.currentTime/60);
    let sec=this.currentTime%60;
    if (min.length!==2){
      min='0'+min;
      return min;
    }
    if (sec.length!==2){
      sec='0'+sec;
      return sec;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime=0;
  }
  splitClick() {
    return `00:00`
  }
}
