/*;
* clockdate.js for PieJS timers
* Copyright 2020 by Eugy Enoch 
* https://eugyenoch.github.io/pie
* For the Pie framework and library
* Released under the MIT License
*
*See the readme file associated with this software for licencing and contact.
*/
"use strict";

//Display digital clock using system time
var clock={};

clock.digitClock = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("digitalClock").innerHTML = d.toLocaleTimeString();
};

//Stop the time - use the function on an HTML element
clock.stopClock=function(){
clearInterval(clock.digitClock)
};

//Display full date
clock.dispDate=function(){
var d = new Date();
var e = d.getDate();
var y = d.getFullYear();
var months = 
["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("fullDate").innerHTML = 
e+" "+ months[d.getMonth()] + " " + y ;
}
