const sumAll = function(num1, num2) {
    let finalSum = null;
if (num1 < 0 
    || num2 < 0 
    || typeof(num1) !== 'number' 
    || typeof(num2) !== 'number'){
    return "ERROR"
}
    if (num1 > num2) [num1, num2] = [num2, num1];
    for (; num1 <= num2; num1++) {
        finalSum += num1
        
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
