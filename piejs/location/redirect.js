/*GENERAL INSTRUCTIONS
;Place this script at head section for a general web page redirect.
;Place in sections for sectional redirect(s).
;There are three methods included here; 
;only one has been made active and the other commented.
;Replace the word YOUR_URL with the actual URL you would love to redirect users to, 
;leaving the double quotes " " in place.
*/

var redir={};

/* FIRST METHOD
;Simulate a mouse click:
;Uncomment the immediate function below if you wish to use the below method.
;If you are redirecting after an AJAX call completes or something, 
;keeping the originating page in history might be expected,
;in which case, use the below method
*/
redir.locationHref=function(){
window.location.href = "YOUR_URL";
};

/* SECOND METHOD
;Simulate an HTTP redirect:
;Comment the immedate function below if you do not wish to use the below method.
;removes the URL of the current document from the document history, 
;meaning that it is not possible 
;to use the "back" button to navigate back to the original document.
*/
redir.locationReplace=function(){
window.location.replace("YOUR_URL");
};

/* THIRD METHOD
;Simulate an HTTP redirect:
;Uncomment the immediate function below if you wish to use the below method.
;performs same as second method
;but does not removes the URL of the current document from the document history, 
;meaning that it is still possible 
;to use the "back" button to navigate back to the original document.
*/
redir.locationAssign=function(){
window.location.assign("YOUR_URL");
};
