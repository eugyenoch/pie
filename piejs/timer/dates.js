/*;
* PieJS v1.1.0 ()
* dates.js for PieJS timers
* Copyright 2020 by Eugy Enoch 
* https://eugyenoch.github.io
* For The Pie frameworks and library
* Released under the MIT License
*
*See the readme file associated with this software for licencing and contact.
*/
"use strict";

var dates={};

//Display full date only
dates.dispFullDate=function(){
var d = new Date();
var e = d.getDate();
var y = d.getFullYear();
var months = 
["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("fullDates").innerHTML = 
e+" "+ months[d.getMonth()] + " " + y ;
};

//Display month and year only
dates.monthOnly=function(){
	var nd = new Date();
	var ny = nd.getFullYear();
	var monthOnly = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("fullMonth").innerHTML = 
monthOnly[nd.getMonth()] + " " + ny ;
};


