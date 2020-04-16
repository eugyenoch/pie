/*
*Javascript developed originally for use in the Eugy calculator software program
*and now included in the PieJS build
*Developed by David U. Enoch(Eugy Enoch) in the year of the Lord 2020.
*
*Permission is hereby granted, free of charge, to any person obtaining a copy
*of this software and associated documentation files (the "Software"), to deal
*in the Software without restriction, including without limitation the rights
*to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*copies of the Software, and to permit persons to whom the Software is
*furnished to do so, subject to the stated conditions.
*
*The above copyright notice and this permission notice shall be included in
*all copies or substantial portions of the Software.
*
*Please See the readme file associated with this file
*for licencing and contact information.
*/
"use strict";

var calc={};

//Off function - Expect more on this function in future build
calc.off=function(){
	setTimeout(offButton,1000)
	setTimeout(offButton2,2000)
	function offButton(){
		calculator.display.value=
		"Calculator going to sleep";
	}
	function offButton2(){
		calculator.display.value=
		"";
	}
};


//On function - Expect more on this function
calc.on=function(){
	setTimeout(onButton,1000)
	setTimeout(onButton2,2000)
	function onButton(){
	calculator.display.value=
	"Calculator waking";
	}
	function onButton2(){
	calculator.display.value=
	0;
	}
};

calc.copy=function(){
	setTimeout(copy1,1000)
	setTimeout(copy2,3000)
    function copy1(){
		document.getElementById('display').value=
		"Made with Love by Eugy Enoch";
    }
		function copy2(){
		document.getElementById('display').value=
		"";
	}
};

calc.cls=function (){
	document.getElementById("display").value="";
};

calc.back=function (){
	var backspace=document.getElementById("display").value;
	document.getElementById("display").value=backspace.substr(0,backspace.length -1);
};

calc.rad=function(){
    var radian=calculator.display.value*Math.PI/180;
	calculator.display.value=radian;
};

calc.rand=function(){
	setTimeout(rand,1000)
	setTimeout(rand1,2000)
	function rand(){
		calculator.display.value="Generating random number";
	}
	function rand1(){
		calculator.display.value=Math.floor(Math.random()*101);
	}
};

calc.increase=function(){
	var increment=calculator.display.value++;
	calculator.display.value=increment;
};

calc.decrease=function(){
	var decrement=calculator.display.value--;
	calculator.display.value=decrement;
};

calc.log2=function(){
	var logs2=Math.log2(calculator.display.value);
	calculator.display.value=logs2;
};

calc.log10=function(){
	var logs10=Math.log10(calculator.display.value);
	calculator.display.value=logs10;
};

calc.abs=function(){
	var absolute=Math.abs(calculator.display.value);
	calculator.display.value=absolute;
};

calc.raise2=function(){
	var raize2=Math.pow(calculator.display.value,2);
	calculator.display.value=raize2;
};

calc.raise3=function(){
	var raize3=Math.pow(calculator.display.value,3);
	calculator.display.value=raize3;
};

calc.max=function(){
	var maximum=Math.max(parseFloat(calculator.display.value));
	calculator.display.value=maximum;
};

calc.min=function(){
	var minimum=min(parseFloat(calculator.display.value));
	calculator.display.value=minimum;
};

calc.round=function(){
	var rounder=Math.round(calculator.display.value);
	calculator.display.value=rounder;
};

calc.pi=function(){
	document.getElementById("display").value=Math.PI;
};

calc.sin= function(){
	var sine=Math.sin(calculator.display.value*Math.PI/180);
	calculator.display.value=sine;
};

calc.asin= function(){
	var asine=Math.asin(calculator.display.value*Math.PI/180);
	calculator.display.value=asine;
};


calc.cos= function(){
	var cosine=Math.cos(calculator.display.value*Math.PI/180);
	calculator.display.value=cosine;
};

calc.acos= function(){
	var acosine=Math.acos(calculator.display.value*Math.PI/180);
	calculator.display.value=acosine;
};

calc.tan=function(){
	var tang=Math.tan(calculator.display.value*Math.PI/180);
	calculator.display.value=tang;
};

calc.atan=function(){
	var atang=Math.atan(calculator.display.value*Math.PI/180);
	calculator.display.value=atang;
};

calc.trunc=function(){
	var truncFunction=Math.trunc(calculator.display.value);
	calculator.display.value=truncFunction;
};

calc.sqr=function(){
	var sqrnum=calculator.display.value;
	var result1=Math.sqrt(sqrnum);
	calculator.display.value=result1;
};

calc.cbrt=function(){
	var cuberoot=Math.cbrt(calculator.display.value);
	calculator.display.value=cuberoot;
};

calc.equal=function(){
	var equals=eval(calculator.display.value);
	calculator.display.value=equals;
};
