/*;
* Reload.js for PieJS location model
* Copyright 2020 by Eugy Enoch 
* https://eugyenoch.github.io/pie/
* For The Pie frameworks and library; 
* Released under the MIT License.
*
*See the readme file associated with this software for licencing and contact.
*/

/*GENERAL INSTRUCTIONS
;Use the code in a function to reload document 
;using an javascript event
;that calls the function defined below.
*/
"use strict";

var reloads={}; 
//This function will force a server reload of web document
reloads.serverDoc=function(){
location.reload(true);
};

/*
;This next function will force a cache reload of web document and is,
;equivalent to the browser refresh button.
*/
reloads.cacheDoc=function(){
location.reload(false);
};
