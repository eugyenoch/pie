/*;
* PieJS v1.1.0 ()
* Form.js for PieJS
* Copyright 2020 by Eugy Enoch
* For The Pie fameworks and Library; 
* https://eugyenoch.github.io/pie/
* Released under the MIT License.
*
*See the readme file associated with this software for licencing and contact.
*/

"use strict";

/*
;Add some basic funsctionalities to forms
;such as submit and reset
*/
var frm={};

//Reset form entries
frm.reset=function() {
  document.getElementById("freset").reset();
};

//Submits form entries
frm.submit=function() {
  document.getElementById("fsubmit").submit();
};

//Display the value of each form element
frm.elvalue=function() {
  var fev = document.getElementById("fevalue");
  var text = "";
  var i;
  for (i = 0; i < fev.length ;i++) {
    text += fev.elements[i].value + "<br>";
  }
  document.getElementById("displayFrom").innerHTML = text;
};

//Disable options list
frm.disableView=function(){
  document.getElementById("formSelect").disabled=true;
};

//Enable options list
frm.ableView=function(){
  document.getElementById("formSelect").disabled=false;
};

//Convert from singleselect to multiselect mode and allow multiselect
frm.multipleSelect=function(){
  document.getElementById("formSelect").multiple=true
};

//Convert to multiselect mode - change size to 2
frm.sizeTwo=function(){
  document.getElementById("formSelect").size = 2
};

//Convert to multiselect mode - change size to 4
frm.sizeFour=function(){
  document.getElementById("formSelect").size = 4
};

//Convert to multiselect mode - change size to 8
frm.sizeEight=function(){
  document.getElementById("formSelect").size = 8
};

//Convert to multiselect mode - change size to 10
frm.sizeTen=function(){
  document.getElementById("formSelect").size = 10
};

//Convert to multiselect mode - change size to 12
frm.sizeTwelve=function(){
  document.getElementById("formSelect").size = 12
};

//Convert to multiselect mode - change size to 16
frm.sizeSixteen=function(){
  document.getElementById("formSelect").size = 16
};

//Display selected options
  frm.dispOption=function() {
  var obj = document.getElementById("formSelect");
  document.getElementById("dispFormSelect").innerHTML=obj.options[obj.selectedIndex].text;
};

//Output all selected options
  frm.outOption=function() {
  var optSel = document.getElementById("formSelect");
  var txt = "";
  var i;
  for (i = 0; i < optSel.length; i++) {
   txt = txt + " " + optSel.options[i].text;}
  document.getElementById("dispOutOption").innerHTML = txt;};

//Display index of selected option
  frm.optIndex=function() {
  document.getElementById("dispOptIndex").innerHTML =
  document.getElementById("formSelect").selectedIndex;
};

//Remove selected option
  frm.optRemove=function() {
  var optRem = document.getElementById("formSelect");
  optRem.remove(optRem.selectedIndex);
};

