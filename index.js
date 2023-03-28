  // Write your code here!
// const rideInFeet = 2500
function scuberGreetingForFeet(rideInFeet){
  if (rideInFeet > 2500) {
   return ('No can do.'); 
  }
  else if (rideInFeet > 2000){
    return ('I will gladly take your thirty bucks.');
  }
 
  else if (rideInFeet <= 400) {
    return ('This one is on me!');
  }
  else{
    return ("Welcome back again")
  }
  }



function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' :'No go.'
  }


function switchOnCharmFromTip(tip){
  // Write your code here!
let generous, notGenerous, anythingElse;
switch (tip) {
  case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.';
}
}