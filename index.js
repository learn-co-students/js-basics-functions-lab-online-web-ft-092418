// Code your solution in this file!
const hq = 42

function distanceFromHqInBlocks(block) {
  return Math.abs(hq - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  switch (true) {
    case distance < 400:
      return 0
      break;
    case distance <= 2000 && distance >= 400:
      return (distance - 400) * .02
      break;
    case distance > 2000 && distance <= 2500:
      return 25
      break;
    default:
      return 'cannot travel that far'
  }
}
