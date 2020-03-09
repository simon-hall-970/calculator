//deal with overflow from large numbers.
//write function for dealing with brackets.

var expression=[];
var display=[];

document.getElementById("base").addEventListener("click", getValue);

function getValue() {
   switch (event.target.className) {

   case "num": 
      if(expression[expression.length-1]=="=") {
      expression=[];
      display=[]
      }
      display.push(event.target.value);
      setDisplay();
      break;

   case "operator":
      if (expression[expression.length-1]=="=") {
         if(event.target.value == "=") {
            return;
         }else{
            expression=[]
            expression.push(display.join(''),event.target.value)
            return resetMain()
         }
      }
      if(event.target.value == "="){
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
      if (event.target.id == "c"){
         resetMain()
      }else {
         expression=[];
         resetMain()
      }break;
   }
}

function resetMain() {
   setDisplay();
   display=[];
}

function setDisplay () {
   document.getElementById("display-bottom").innerHTML=display.join('');
   document.getElementById("display-top").innerHTML=expression.join(' ')
}
