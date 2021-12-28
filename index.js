// Your code here
function mapToNegativize(sourceArray) {
   return sourceArray.map(n => n * -1);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(n => n);
 }

 function mapToDouble(sourceArray) {
    return sourceArray.map(n => n * 2);
 }

 function mapToSquare(sourceArray) {
    return sourceArray.map(n => n ** 2);
 }

 function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return sourceArray.reduce(reducer, startingPoint)
 }

 function reduceToAllTrue(sourceArray) {
    const reducer = function (previousValue, currentValue) {
    if(!!previousValue == true && !!currentValue == true ){
        return true;
    } else {
        return false;
        }
    }
    return sourceArray.reduce(reducer, true)
 }

 function reduceToAnyTrue(sourceArray) {
    const reducer = function (previousValue, currentValue) {
    if(previousValue == true){
        return true;
    } else {
        return !!currentValue;
        }
    }
    return sourceArray.reduce(reducer, false)
 }