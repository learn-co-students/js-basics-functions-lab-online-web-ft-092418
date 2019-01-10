// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let blocks
    if (distance >= 42) {
        blocks = distance - 42
    } else if (distance < 42) {
        blocks = 42 - distance
    }
    return blocks
}

function distanceFromHqInFeet(distance) {
    let feet = distanceFromHqInBlocks(distance) * 264
    return feet
}

function distanceTravelledInFeet(start, end) {
    let distance 
    end >= start ? distance = (end - start) * 264 : distance = (start - end) * 264
    return distance
}

function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination)
    if (fare < 400){
        fare = 0
    } else if (fare >= 400 && fare <= 2000) {
        fare = (fare - 400) * 0.02 
    } else if (fare > 2000 && fare < 2501) {
        fare = 25
    } else {
        fare = "cannot travel that far"
    }  
    return fare
}