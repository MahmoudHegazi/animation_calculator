var myobject = {
	"exp" : [],
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
   this.screen.text += '0';
}

this.num_1.addEventListener("click", num1.bind(this));
function num1() {
   get_value('1');
   this.screen.text += '1';
}
this.num_2.addEventListener("click", num2.bind(this));
function num2() {
   get_value('2');
   this.screen.text += '2';
}
this.num_3.addEventListener("click", num3.bind(this));
function num3() {
   get_value('3');
   this.screen.text += '3';
}
this.num_4.addEventListener("click", num4.bind(this));
function num4() {
   get_value('4');
   this.screen.text += '4';
}
this.num_5.addEventListener("click", num5.bind(this));
function num5() {
   get_value('5');
   this.screen.text += '5';
}

this.num_6.addEventListener("click", num6.bind(this));
function num6() {
   get_value('6');
   this.screen.text += '6';
}
this.num_7.addEventListener("click", num7.bind(this));
function num7() {
   get_value('7');
   this.screen.text += '7';
}
this.num_8.addEventListener("click", num8.bind(this));
function num8() {
   get_value('8');
   this.screen.text += '8';
}
this.num_9.addEventListener("click", num9.bind(this));
function num9() {
   get_value('9');
   this.screen.text += '9';
}

// epo
this.ope_add.addEventListener("click", ope1.bind(this));
function ope1() {
   get_value('+');
   this.screen.text += '+';

}

this.opp_subtract.addEventListener("click", ope2.bind(this));
function ope2() {
   get_value('-');
   this.screen.text += '-';

}

this.ope_multi.addEventListener("click", ope3.bind(this));
function ope3() {
   get_value('*');
   this.screen.text += '*';

}
this.ope_dividing.addEventListener("click", ope4.bind(this));
function ope4() {
   get_value('/');
   this.screen.text += '/';

}


this.sign_dot.addEventListener("click", ope5.bind(this));
function ope5() {

get_value('.');
this.screen.text += '.';

	
}
this.ope_mod.addEventListener("click", ope6.bind(this));

function ope6() {
 get_value('%');
 this.screen.text += '%';	

}

// exponentiation الاسي
this.ope_exp.addEventListener("click", ope7.bind(this));
function ope7() {
 get_value('**');
 this.screen.text += '**';	

}

/*clear and pop up function  */

this.cleans.addEventListener("click", clear.bind(this));
function clear() {
   this.screen.text += '';
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
   this.screen.text = x;	

}






// get each button value
function get_value(val){
    // add the button value to the object    
	myobject.myInputs += val;	
    
 }

 // result function button = 
this.result.addEventListener("click", myresult.bind(this));

function myresult() {
  var result = myobject.calculate();
  this.screen.text = result;
 
}


