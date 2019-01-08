function distanceFromHqInBlocks (blocks) {
  return Math.abs(blocks-42);
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}


function distanceTravelledInFeet(start , end) {
  return Math.abs(distanceFromHqInFeet (start)-distanceFromHqInFeet (end));
}

function calculatesFarePrice(start , end) {
  distance = distanceTravelledInFeet(start , end);

  if (distance > 2500){
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance-400) * 0.02;
  } else {
    return 0;
  }


}
