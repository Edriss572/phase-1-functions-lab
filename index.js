function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; 
}


function distanceTravelledInFeet(startBlock, endBlock) {
  const distance = Math.abs(startBlock - endBlock);
  return distance * 264;
}


function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far'; 
  }
}
