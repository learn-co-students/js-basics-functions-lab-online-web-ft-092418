// Code your solution in this file!
function distanceFromHqInBlocks(start) {
  let distance = (start - 42);
  if (distance < 0) {
    distance *= -1;
  } 
    return distance ;
}

function distanceFromHqInFeet (start) {
  let feet = distanceFromHqInBlocks(start) * 264 ;
  return feet;
}

function distanceTravelledInFeet (start, end) {
  let feet = (start - end) * 264 ;
  if (feet < 0) {
    feet *= -1
  }
  return feet;
}


function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination) ;
  let fare;
  if (feet < 400) {
    fare = 0 ;
  } else if (feet >= 400 && feet <= 2000) {
    fare = (feet - 400) * 0.02 ;
  } else if (feet > 2000 && feet <= 2500 ) {
    fare = 25 ;
  } else {
    fare = 'cannot travel that far' ;
  }
  return fare ;
}