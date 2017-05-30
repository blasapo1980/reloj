function currentHour(){
  var time = new Date ();
  var sec = time.getSeconds ();
  var min = time.getMinutes();
  var hour = time.getHours();

  var printHour = document.querySelector(".hour");
  var printMin = document.querySelector(".min");
  var printSec =document.querySelector(".sec");

  printHour.textContent = hour +" "+ "hour";
  printMin.textContent = min +" "+ "munutes";
  printSec.textContent = sec+" "+ "seconds";
}


setInterval(currentHour,1000)
