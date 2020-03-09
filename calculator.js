/* 

press a number button and that number should appear in the main display

pressing another number will multiply the existing value in the main display by ten and add the new number

pressing an operator will take the display number and move it to the top display with an operator clearing and clear the main display

After entering further numbers that appear in the main display either
 -another operator will add it to the top display building an expression or
 -pressing the equals sign will add it to the top display as an expression and display the result in the main display.

After pressing equals the expression will be in top display and the result in the bottom display. 
-if a number is pressed then it will clear all displays and that value will appear in the main display.
-if an operator is pressed it will clear the top display and move the value from the main display to the top display with the operator sign awaiting a new number
Note: in this situation the top display will always show an expression that ends with an equals sign.

In all other situations the top expression will always end in an operator.

The bottom display will only ever display numbers.

The top expression may get long will need to hide overflow.

No brackets at this stage but may need to add later to offer the user more control. Equations will follow bedmas

How to store numbers. We will be building an expression. We won't need to convert numbers to strings. We just multiply the existing number by ten and add the new one.
We will need to store the number somewhere in an array. We will need to store the operators somewhere and the array will grow and shrink depending on how many items in the expression.
*/

//press a number and display value in main display.

var expression=[];
var display=[];
var result

$butt=document.getElementsByTagName('button');

document.getElementById("base").addEventListener("click", getValue);

function getValue() {
   console.log(event.target.className);
   switch (event.target.className) {
   case "num": 
      display.push(event.target.value);
      setDisplay();
      break;
   case "operator":
      if(event.target.value == "="){
         expression.push(display.join(''));
         result=eval(expression.join(' '));
         expression.push(event.target.value)
         display=[result];
         setDisplay();
      }else{
         expression.push(display.join(''),(event.target.value));
         display=[];
         setDisplay();
      }
      break;
   case "clear": 
      if (event.target.id == "c"){
         display=[];
         return setDisplay();
      }else {
         expression=[];
         display=[];
         setDisplay();
      }break;
   }
   
}

function setDisplay () {
   document.getElementById("display-bottom").innerHTML=display.join('');
   document.getElementById("display-top").innerHTML=expression.join(' ')
}
