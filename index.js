// Code your solution in this file!

function distanceFromHqInBlocks(st){
    let ans = st - 42;
    if (ans < 0){
        ans = -ans;
    }
    return ans;
}

function distanceFromHqInFeet(st){
   return distanceFromHqInBlocks(st) * 264;
}

function distanceTravelledInFeet(st, fin){
    let blocks = fin - st; 
    blocks < 0 ? blocks = -blocks : null;
    return blocks * 264;

 }
 
 function calculatesFarePrice(start, destination){
    ft = distanceTravelledInFeet(start, destination)
    let fare = 0;
    switch (true){

        case ft >= 400 && ft <= 2000:
            fare = (ft - 400) * .02;
            break;
        case ft > 2000 && ft <= 2500:
            fare = 25;
            break;
        case ft > 2500:
            fare = 'cannot travel that far';
    }
    return fare;
 }