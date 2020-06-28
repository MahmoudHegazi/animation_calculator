var myobject = {
	"myoperators" : ["+", "-", "/", ".", "*", "%"],
	"myInputs" : "",	
	calculate : () => {
		// calculation
	  var x = myobject.myInputs;
	  var res = eval(x);
	  return res;	
	},
    pop: () => {
       //remove last char
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var n = str.slice(0, last);
	   myobject.myInputs = n;
	   return n;
	},
	cleans: () => {
	   myobject.myInputs = "";
	}
	
}

// start

this.num_0.addEventListener("click", num0.bind(this));
function num0() {
   get_value('0');
   exportRoot.screen.text += '0';
}

this.num_1.addEventListener("click", num1.bind(this));
function num1() {
   get_value('1');
   exportRoot.screen.text += '1';
}
this.num_2.addEventListener("click", num2.bind(this));
function num2() {
   get_value('2');
   exportRoot.screen.text += '2';
}
this.num_3.addEventListener("click", num3.bind(this));
function num3() {
   get_value('3');
   exportRoot.screen.text += '3';
}
this.num_4.addEventListener("click", num4.bind(this));
function num4() {
   get_value('4');
   exportRoot.screen.text += '4';
}
this.num_5.addEventListener("click", num5.bind(this));
function num5() {
   get_value('5');
   exportRoot.screen.text += '5';
}

this.num_6.addEventListener("click", num6.bind(this));
function num6() {
   get_value('6');
   exportRoot.screen.text += '6';
}
this.num_7.addEventListener("click", num7.bind(this));
function num7() {
   get_value('7');
   exportRoot.screen.text += '7';
}
this.num_8.addEventListener("click", num8.bind(this));
function num8() {
   get_value('8');
   exportRoot.screen.text += '8';
}
this.num_9.addEventListener("click", num9.bind(this));
function num9() {
   get_value('9');
   exportRoot.screen.text += '9';
}

// epo
this.ope_add.addEventListener("click", ope1.bind(this));
function ope1() {
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('+');
          exportRoot.screen.text += '+';	
	 }

}

this.opp_subtract.addEventListener("click", ope2.bind(this));
function ope2() {
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('-');
          exportRoot.screen.text += '-';	
	 }
}

this.ope_multi.addEventListener("click", ope3.bind(this));
function ope3() {
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('*');
          exportRoot.screen.text += '*';	
	 }

}
this.ope_dividing.addEventListener("click", ope4.bind(this));
function ope4() {
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('/');
          exportRoot.screen.text += '/';	
	 }

}


this.sign_dot.addEventListener("click", ope5.bind(this));
function ope5() {

	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('.');
          exportRoot.screen.text += '.';	
	 }

	
}
this.ope_mod.addEventListener("click", ope6.bind(this));

function ope6() {
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('%');
          exportRoot.screen.text += '%';	
	 }

}

// exponentiation الاسي
this.ope_exp.addEventListener("click", ope7.bind(this));
function ope7() {
	
	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('**');
          exportRoot.screen.text += '**';	
	 }

}

/*clear and pop up function  */

this.cleans.addEventListener("click", clear.bind(this));
function clear() {
   exportRoot.screen.text += '';
   myobject.cleans();

}
/*
  var str = "Hello worldsdasdasdad!a";
  var last = str.length - 1;
  var res = str.slice(0, last);
*/

this.pop_number.addEventListener("click", mon.bind(this));
function mon() {
   var x = myobject.pop();
   exportRoot.screen.text = x;	

}
/*
function helper() {
var myoperators = ["+", "-", "/", ".", "*", "%"];

	   var str = myobject.myInputs;
       var last = str.length - 1;
       var lastchar = str[last];
       var checker = myobject.myobject.myoperators.includes(lastchar);

     if (checker == true) {
		 exportRoot.screen.text = myobject.myInputs;
	 } else {
		  get_value('**');
          exportRoot.screen.text += '**';	
	 }

 }      
*/


// get each button value
function get_value(val){
    // add the button value to the object    
	myobject.myInputs += val;	
    
 }

 // result function button = 
this.result.addEventListener("click", myresult.bind(this));

function myresult() {
  var result = myobject.calculate();
  exportRoot.screen.text = result;
 
}


// كود الدوس علي الزراير

   //exportRoot.screen.text == ""
document.addEventListener('keypress', myclicks);
function myclicks() {
	//0
if (event.keyCode == 48) {
	num0();
} else if (event.keyCode == 49) {
	num1();
} else if (event.keyCode == 50) {
	num2();
} else if (event.keyCode == 51) {
	num3();
} else if (event.keyCode == 52) {
	num4();
} else if (event.keyCode == 53) {
	num5();
} else if (event.keyCode == 54) {
	num6();
} else if (event.keyCode == 55) {
	num7();
} else if (event.keyCode == 56) {
	num8();
} else if (event.keyCode == 57) {
	num9();
} else if (event.keyCode == 42) {
	// *
	ope3();
} else if (event.keyCode == 43) {
	// +
	ope1();
} else if (event.keyCode == 45) {
	// -
	ope2();
} else if (event.keyCode == 47) {
	//  / 111
	ope4();
} else if (event.keyCode == 46) {
	// . 190 110
	ope5();
} else if (event.keyCode == 94) {
	ope7();
} else if (event.keyCode == 37) {
	ope6();
} else if (event.keyCode == 13) {
	myresult();
}else if (event.keyCode == 100) {
	// clear function (d) to remove pres(d) then c
	clear();
}else if (event.keyCode == 99) {
	// popup function (c)
	mon();
}else {
	return;
}

}
