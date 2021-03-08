/*-------------------------- Code Tran --------------------------------------------------------------------*/
/*
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
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
*/

/*----------------------------------------- Code Julien -----------------------------------------------*/
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime ++
      if (callback){callback()};
    },1000);
  }
  getMinutes() {
    // ... your code goes here
    return Number(Math.trunc(this.currentTime/60));
  }
  getSeconds() {
    // ... your code goes here
    return Number(this.currentTime % 60);
  }
  twoDigitsNumber(myTime) {
    // ... your code goes here
    return myTime.toString().length === 2 ? myTime.toString() : "0" + myTime.toString();
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}