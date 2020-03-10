var expression=[];
var display=[];

document.getElementById("base").addEventListener("click", getValue);

function getValue() {
   switch (event.target.className) { //select action depending on type of button pressed.

   case "num": 
      numberPress();
   break;

   case "operator":
      operatorPress();
   break;

   case "clear": 
      clearPress();
   break;
   }
}

function numberPress() {
   if ((event.target.value == ".") && (display.includes("."))) {
      return
   } //restrict entries to single decimal

   else if (event.target.value == "neg"){ //positive negative
      if (display[0] == "-") {
         display.shift();
         return setDisplay();
      }else {
         display.unshift("-");
         return setDisplay();
      }
   } else {
      if(expression[expression.length-1]=="=") {
         resetFull()
      }
   display.push(event.target.value);
   return setDisplay();
   }
}

function operatorPress() {
   const opArr = ["+", "-", "/", "x"];
   if (display.length<1) {
      return;
   } 
   else if (event.target.value == "=") {
         if (expression[expression.length-1] == "=") {
            return;
         } 
         else if (expression.length<1) {
            return;
         }
         else {
         expression.push(display.join(''));
         display=[eval(expression.join(' '))]; 
         expression.push(event.target.value);
         setDisplay();
         return;
      }
   }

   else if (expression[expression.length-1] == "=")   { //allow new operations to be performed on the last result
         expression=[];
         expression.push(display.join(''),event.target.value);
         return reset();
      }

   else {
      expression.push(display.join(''),(event.target.value)); 
      reset();
   }
}

function clearPress() {
   if (expression[expression.length-1]=="=") {//if euqation is resolved all clear buttons clear everything
      resetFull();

   }else if (event.target.id == "ce"){ //clears entry leaves previous entries in top display
      resetClear();

   }else {//AC resets everything back to start
      resetFull();
   }
}

function reset() { //some refactoring to reset the main display
   setDisplay();
   display=[];
}

function resetClear() {
   display=[];
   setDisplay();
}

function resetFull(){
   expression=[];
   resetClear();
}

//function to set the displays
function setDisplay () {
   document.getElementById("display-bottom").innerHTML=display.join('');
   document.getElementById("display-top").innerHTML=expression.join(' ');
}