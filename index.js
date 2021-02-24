// Code your solution in this file!
/*distanceFromHqInBlocks()
      1) returns a distance in blocks
      2) returns a distance in blocks
      3) calculates distances below 42nd street
    distanceFromHqInFeet()
      4) returns a distance in feet
      5) returns a distance in feet
      6) calculates distances below 42nd street
    distanceTravelledInFeet()
      7) returns the distance travelled in feet
      8) returns a distance in feet
      9) returns distance when destination is below distance
    calculatesFarePrice(start, destination)
      10) gives customers a free sample
      11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      12) charges 25 dollars for a distance over 2000 feet
      13) does not allow rides over 2500 feet*/


// distance from headquarters in blocks
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
        return pickupLocation - 42;
    }
    else if (pickupLocation < 42) {
        return 42 - pickupLocation
    }
}
// distance from headquarters in feet (blocks * 264)
function distanceFromHqInFeet(pickupLocation) {
    if (pickupLocation > 42) {
        return (pickupLocation - 42)*264;
    }
    else if (pickupLocation < 42) {
        return (42 - pickupLocation)*264;
    }
}
// distance travelled in feet given starting and ending blocks
function distanceTravelledInFeet(startingBlock, endingBlock) {
    if ((startingBlock - endingBlock) > 0) {
        return (startingBlock - endingBlock)*264;
    }
    else if ((startingBlock - endingBlock) < 0) {
        return (endingBlock - startingBlock)*264;
    }
}

// calculates fare given the number of feed traveled from one block to another

function calculatesFarePrice(startingBlock, endingBlock) {
if (((startingBlock - endingBlock)*264) > 2500) {
    return "cannot travel that far";
}
else if (Math.abs((startingBlock - endingBlock)*264) > 2000) {
    return 25;
}
else if (((startingBlock - endingBlock)*264) > 400) {
    return ((((startingBlock - endingBlock)*264) - 400) * .02);
}
else if (((startingBlock - endingBlock)*264) < 400) {
    return 0
}
}