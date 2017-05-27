function currentHour(){
  var time = new Date ();
  var sec = time.getSeconds ();
  var min = time.getMinutes();
  var hour = time.getHours();

  var printHour = document.querySelector(".hour");
  var printMin = document.querySelector(".min");
  var printSec =document.querySelector(".sec");

  printHour.textContent = hour;
  printMin.textContent = min;
  printSec.textContent = sec;
}


setInterval(currentHour,1000)
