/*;
* countdown.js; plugin for webmasters
* Copyright 2020 by Eugy Enoch
* https://eugyenoch.github.io/pie/
* For the Pie frameworks and library; 
* Released under the MIT License.
*
*See the readme file associated with this software for licencing and contact.
*/

"use strict";

var timer = new Date("Dec 31, 2020 13:27:15").getTime();

// Update the count down every 1 second
var update = setInterval(function() {
  var now = new Date().getTime();
  var updateToNow = timer - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(updateToNow / (1000 * 60 * 60 * 24));
  var hours = Math.floor((updateToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((updateToNow % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((updateToNow % (1000 * 60)) / 1000);

  // Display the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // When count down finishes
  if (updateToNow < 0) {
    clearInterval(update);
    document.getElementById("countdown").innerHTML = "WE ARE HERE NOW";
  }
}, 1000); 
