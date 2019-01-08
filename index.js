// Code your solution in this file!
function distanceFromHqInBlocks(block){
  let distance = 42 - block;
  return Math.abs(distance);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  let blocks = end - start;
  return Math.abs(blocks) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let cost;
  if (distance <= 400) {
    cost = 0;
  } else if (distance < 2000) {
    cost = (distance - 400) * .02
  } else if (distance < 2500) {
    cost = 25
  } else {
    cost = "cannot travel that far"
  }

  return cost;
}
