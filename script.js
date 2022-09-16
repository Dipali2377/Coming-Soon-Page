// Set the birthday date
var countDownDate = new Date("Jun 3, 2023 00:00:00").getTime();

var x = setInterval(function () {
  // Update the count down every 1 second

  var curr = new Date().getTime(); // Get current date and time

  var distance = countDownDate - curr; // Find the distance between current an the count down date

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("result").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s "; // Display the result in an element with id="result"

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY !"; // If the count down is finished, then wish happy birthday
  }
}, 1000);
