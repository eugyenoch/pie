/*;
* PieJS
* Copyright 2020 by Eugy Enoch 
* https://eugyenoch.github.io/pie/
* For Pie framework and library; 
* Released under the MIT License
*
*See the readme file associated with this software for licencing and contact.
*/

"use strict";

var pie={};

pie.addClassElements = function (elements, name) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    pie.addClassElement(elements[i], name);
  }
};

pie.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};

pie.hide = function () {
  pie.hideElements(pie.getElements());
};

pie.hideElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    pie.hideElement(elements[i]);
  }
};
pie.hideElement = function (element) {
  pie.styleElement(element, "display", "none");
};

pie.show = function (a) {
  var elements = pie.getElements();
  if (a) {pie.hideElements(elements);}
  pie.showElements(elements);
};

pie.showElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    pie.showElement(elements[i]);
  }
};
pie.showElement = function (element) {
  pie.styleElement(element, "display", "block");
};

pie.styleElements = function (elements, prop, val) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    pie.styleElement(elements[i], prop, val);
  }
};
pie.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};

pie.addClassElement = function (element, name) {
  var i, range1, range2;
  range1 = element.className.split(" ");
  range2 = name.split(" ");
  for (i = 0; i < range2.length; i++) {
    if (range1.indexOf(range2[i]) == -1) {element.className += " " + range2[i];}
  }
};

pie.removeClassElement = function (element, name) {
  var i, range1, range2;
  range1 = element.className.split(" ");
  range2 = name.split(" ");
  for (i = 0; i < range2.length; i++) {
    while (range1.indexOf(range2[i]) > -1) {
      range1.splice(range1.indexOf(range2[i]), 1);     
    }
  }
  element.className = range1.join(" ");
};

pie.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};

pie.getElementsByAttribute = function (x, att) {
  var range = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
  l = y.length;
  for (i = -1; i < l; i += 1) {
    if (i == -1) {y[i] = x;}
    if (y[i].getAttribute(z) !== null) {rangeCount += 1; range[rangeCount] = y[i];}
  }
  return range;
}; 

//Popout form
pie.openForm=function() {
  document.getElementById("popForm").style.display = "block";
};

pie.closeForm=function() {
  document.getElementById("popForm").style.display = "none";
};

//Slider

pie.imgslider = function(){
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
};

//List Toggler - Tree-view-arrow
pie.treeArrow=function(){
var toggler = document.getElementsByClassName("tree-view-arrow");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector("tree-view-nested").classList.toggle("tree-view-active");
    this.classList.toggle("tree-view-arrow");
  });
}
};
//List Toggler - Tree-view-check
pie.treeChecker=function(){
var checker = document.getElementsByClassName("tree-view-check");
var i;

for (i = 0; i < checker.length; i++) {
  checker[i].addEventListener("click", function() {
    this.parentElement.querySelector("tree-view-nested").classList.toggle("tree-view-active");
    this.classList.toggle("tree-view-checkbox");
  });
}
};
