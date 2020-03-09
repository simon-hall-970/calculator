//deal with overflow from large numbers.
//write function for dealing with brackets.
//write function for dealing with multiple operators.  Allow plus minus and minus plus but no other double operators.
//Could be as simple as returning an error after evaluation on incorrect expressions.


var expression=[];
var display=[];

document.getElementById("base").addEventListener("click", getValue);

function getValue() {
   switch (event.target.className) {

   case "num": 
      if ((event.target.value == ".") && (display.includes("."))) {
         return} //restrict entries to single decimal
      display.push(event.target.value);
      setDisplay();
      break;

   case "operator":
      if (expression[expression.length-1]=="=") {
         if(event.target.value == "=") { //nullify "=" button on repetitive clicks
            return;
         }else{ //allow new operations to be performed on the last result
            expression=[]
            expression.push(display.join(''),event.target.value)
            return resetMain()
         }
      }
      if(event.target.value == "="){ //resolve an equation on the equals
         expression.push(display.join(''));
         display=[eval(expression.join(' '))]; 
         expression.push(event.target.value)
         setDisplay();
      }else{
         expression.push(display.join(''),(event.target.value)); 
         resetMain();
      }
      break;

   case "clear": 
      if (expression[expression.length-1]=="=") {//if euqation is resolved all clear buttons clear everything
         expression=[];
         display=[];
         setDisplay();
      }else if (event.target.id == "ce"){ //clears entry leaves previous entries in top display
         resetMain()
      }else {//AC resets everything back to start
         expression=[]
         display=[];
         setDisplay();
      }break;
   }
}

function resetMain() { //some refactoring to reset the main display
   setDisplay();
   display=[];
}

//function to set the displays
function setDisplay () {
   document.getElementById("display-bottom").innerHTML=display.join('');
   document.getElementById("display-top").innerHTML=expression.join(' ')
}
