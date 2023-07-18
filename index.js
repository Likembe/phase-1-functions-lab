// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42;
    return Math.abs(blocks - hqLocation);
  }
  const blocks = distanceFromHqInBlocks(50);
  console.log(blocks); 
    
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264; 
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264; 
}
console.log(distanceFromHqInFeet(50)); 
console.log(distanceTravelledInFeet(43, 48));

// Function to calculate the fare price between two points

function calculatesFarePrice(start, destination){
  let result = Math.abs(destination - start)*264;
  if (result <= 400){
    let fairPrice = 0;
    return (fairPrice);
  }else if (result >400 && result <= 2000){
    let fairPrice = ((result - 400)*0.02);
    return (fairPrice);
  }else if (result > 2000 && result <2500){
    let fairPrice = 25;
    return (fairPrice);
  }else {
    let fairPrice = "cannot travel that far";
    return (fairPrice);
  }

}
console.log(calculatesFarePrice(42, 50));
    