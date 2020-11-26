var minutes = 25;
var seconds = 00;

function timer() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
function start() {
  minutes = 24;
  seconds = 59;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  var minInt = setInterval(minutesTimer, 60000);
  var secInt = setInterval(secondsTimer, 1000);
  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }
  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;
    // prevents from negative value of sec
    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minInt);
        clearInterval(secInt);
      }
      seconds = 60;
    }
  }
}
