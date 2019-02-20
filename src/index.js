/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let firstLoves , secondLoves , thirdLoves, firstPosition,
        secondPosition, thirdPosition, firstPositionArray,secondPositionArray, thirdPositionArray ;
    let count = 0;
    for (let i=0; i<preferences.length; i++){
        firstLoves=secondLoves=thirdLoves=firstPosition =
            secondPosition= thirdPosition= firstPositionArray=
                secondPositionArray= thirdPositionArray=0;
        firstPositionArray = i;
        firstPosition = firstPositionArray+1;
        firstLoves = secondPosition = preferences[firstPositionArray];
        secondPositionArray = secondPosition-1;

        if (secondPosition !== 0 && secondPosition <= preferences.length && firstPosition!==secondPosition) {
            secondLoves = thirdPosition = preferences[secondPositionArray];
            thirdPositionArray = thirdPosition-1;
        } else continue;

        if (secondPosition !== 0 && secondPosition <= preferences.length && secondPosition!==thirdPosition){
            thirdLoves = preferences[thirdPositionArray];
        } else continue;

        if (thirdLoves === firstPosition ) count++;
  }
    return count/3;
};
