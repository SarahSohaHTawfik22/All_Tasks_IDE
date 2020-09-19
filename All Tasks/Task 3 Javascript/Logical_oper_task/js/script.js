//////////////#1//////////////
  console.log("The answer will be 2.");
/////////////#2///////////////////
console.log("The answer will be 1.");
/////////////#3////////////////////////
console.log("The answer will be null.");
/////////////#////////////////////
let inputage=prompt('Enter your age here!');
function CalcRangeAge(){
    if (age >= 14 && age <= 90){
        alert('your age is between 14 and 90.');
    }else{
        alert('your age is not between 14 and 90.');


    }

}
CalcRangeAge();

/////////////#////////////////////
function OutRange1(){
    let age11=prompt('enter your age!');
    if (!(age11 >= 14 && age11 <= 90)){
        alert('your age is not between 14 and 90.');
    }

}
function OutRange2(){
    let age22=prompt('enter your age!');
    if (age22 < 14 || age22 > 90){
        alert('your age is not between 14 and 90.');
    }

}
/////////////#////////////////////
function CheckLogin(){
    let name = prompt("Who's there?", '');

    if (name == 'Admin') {
    
      let pass = prompt('Password?', '');
    
      if (pass == 'TheMaster') {
        alert( 'Welcome!' );
      } else if (pass == '' || pass == null) {
        alert( 'Canceled' );
      } else {
        alert( 'Wrong password' );
      }
    
    } else if (name == '' || name == null) {
      alert( 'Canceled' );
    } else {
      alert( "I don't know you" );
    }



}
CheckLogin();