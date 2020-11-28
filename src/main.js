//value limit set for timer
let seconds = 60;
let minutes = 24;
let hours = 0;

let showSeconds = 0;
let showMinutes = 0;
let showHours = 0;

let interval = null;
//initial status
let status = "stopped";
//decrementing the set value
//decrement sec
function timer() {
  seconds--;
  //decrement min
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    //decrement hr
    if (minutes < 0) {
      minutes = 59;
      hours--;
      // display msg on time out
      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById("show").innerHTML = "00:00:00 Timer Expired";
      }
    }
  }
  //add a 0 tens place when time is single digit
  if (seconds < 10) {
    showSeconds = "0" + seconds.toString();
  } else {
    showSeconds = seconds;
  }
  if (minutes < 10) {
    showMinutes = "0" + minutes.toString();
  } else {
    showMinutes = minutes;
  }
  if (hours < 10) {
    showHours = "0" + hours.toString();
  } else {
    showHours = hours;
  }
  //concatenated output
  document.getElementById("show").innerHTML =
    showHours + ":" + showMinutes + ":" + showSeconds;
}
//click to start timer
function start() {
  if (status === "stopped") interval = window.setInterval(timer, 1000);
  document.getElementById("start");
}
//pause to pause timer
function pause() {
  window.clearInterval(interval);
  document.getElementById("pause");
}
// resetting timer
function reset() {
  window.clearInterval(interval);
  seconds = 00;
  minutes = 25;
  hours = 0;
  document.getElementById("show").innerHTML = "00:25:00";
}
//end of simple timer of 25 mins
document.getElementById("start").innerHTML = "Start";
status = "stopped";
document.getElementById("start").disabled = false;
document.getElementById("short").disabled = false;
document.getElementById("long").disabled = false;
// function for short break of 1 to 5 mins
function shortBreak() {
  flag = 1;
  window.clearInterval(interval);
  // promt message to enter input from user
  var Time = prompt("Short break will be between 1-5 minutes");
  if (Time != null) {
    if (Time === "") {
      Time = 5;
      document.getElementById("show").innerHTML = "00:" + Time + ":00";
    } else {
      if (Time < 1) {
        Time = 1;
        document.getElementById("show").innerHTML = "00:0" + Time + ":00";
      } else if (Time > 5) {
        Time = 5;
        document.getElementById("show").innerHTML = "00:0" + Time + ":00";
      } else {
        Time = parseInt(Time);
        if (Number.isInteger(Time)) {
          document.getElementById("show").innerHTML = "00:0" + Time + ":00";
        } else {
          alert("Please enter a valid number");
          flag = 0;
        }
      }
    }
  } else {
    Time = 0;
    flag = 0;
    document.getElementById("show").innerHTML = "00:25:00";
    //alert("your break is for 5 min");
  }
  minutes = Time;
  status = "stopped";
  seconds = "0";
  start();
}
//function for long break
function longBreak() {
  flag = 1;
  window.clearInterval(interval);
  var Time = prompt("Long break cane be between 10-15 minutes");
  if (Time != null) {
    if (Time === "") {
      Time = 15;
      document.getElementById("show").innerHTML = "00:" + Time + ":00";
    } else {
      if (Time < 10) {
        Time = 10;
        document.getElementById("show").innerHTML = "00:" + Time + ":00";
      } else if (Time > 15) {
        Time = 15;
        document.getElementById("show").innerHTML = "00:" + Time + ":00";
      } else {
        Time = parseInt(Time);
        if (Number.isInteger(Time)) {
          document.getElementById("show").innerHTML = "00:" + Time + ":00";
        } else {
          alert("Please enter a valid number");
          flag = 0;
        }
      }
    }
  } else {
    Time = 0;
    flag = 0;
    document.getElementById("show").innerHTML = "00:25:00";
    //alert("your break is for 5 min");
  }
  minutes = Time;
  status = "stopped";
  seconds = "0";
  start();
}
