  //////////////#1 if(a string with zero)//////////////
  console.log("Yes, it will pop up a hello alert at the top .");
  /////////////#2 name of JavaScript///////////////////
  
  let value = prompt('What is the "official" name of JavaScript?');
function NameOfJavaScript(){
  if (value == 'ECMAScript') {
  console.log('Right!');
  } else {
   console.log("You don't know? ECMAScript!");
 }
}
 NameOfJavaScript();
 /////////////#3 show the sign////////////////////////
   console.log('We assume that the input is always a number.');
   let input11 = prompt('Enter your number please', 0);
   function ShowTheSign(){
   if (input11 > 0) {
     alert( 1 );
   } else if (input11 < 0) {
      alert( -1 );
   } else {
     alert( 0 );
     }
    }
     ShowTheSign(); 

/////////////#4 write an if into '?'////////////////////
var a,b;
function WriteAnIfInto(){
let result= (a + b < 4) ? 'Below' : 'Over';
console.log(result);
}
WriteAnIfInto();
/////////////#5 Rewrite an if-else into '?'////////////////////
function RewriteAnIfelseInto(){
let message = (login == 'Employee') ? 'Hello' :(login == 'Director') ? 'Greetings' :(login == '') ? 'No login' : '';
console.log(message);
}
RewriteAnIfelseInto();
