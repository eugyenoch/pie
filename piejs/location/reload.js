/*GENERAL INSTRUCTIONS
;Use the code in a function to reload document 
;using an javascript event
;that calls the function defined below.
*/

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
