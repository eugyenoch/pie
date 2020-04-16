/*;
* PieJS v1.1.0 ()
* history.js for PieJS
* Copyright 2020 by Eugy Enoch
* For The Pie fameworks and Library; 
* https://eugyenoch.github.io/pie/
* Released under the MIT License.
*
*See the readme file associated with this software for licencing and contact.
*/

/*
;The history object contains URLs visited by a user
;a user can choose to go back or forward
;to previosly loaded elements or URLs
*/


var hist={};

//To go back one step in memory history
hist.goBack=function(){
window.history.back();
};

//To go back double steps
hist.goBackDouble=function(){
	window.history.back(-2);
};

//To go forward one step in memory history
hist.goForward=function(){
window.history.forward();
};

//To go forward double steps
hist.goForwardDouble=function(){
	window.history.forward(2);
};
