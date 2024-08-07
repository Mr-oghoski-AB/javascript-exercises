const add = function(...arr) {
	let finalSum = null ; 
  arr.forEach((item) => {
    finalSum += item;
  })
  return finalSum
};

const subtract = function(...arr) {
  let finialNum = arr.reduce((total, currentItem) => {
    return total - currentItem;
  })
  return finialNum
};

const sum = function(arr) {
	let finialNum = arr.reduce((total, currentItem) => {
    return total + currentItem
  }, 0)
  return finialNum
};

const multiply = function(arr) {
  let finialNum = arr.reduce((total, currentNum) => {
    return total * currentNum
  })
  return finialNum
};

const power = function(...arr) {
  let finialNum = arr.reduce((total, currentNum) => {
    return total ** currentNum
  })
  return finialNum
};

const factorial = function(num) {
	let finalNum = 1;
    if (num == 0 ){
      finalNum = 1;
      // return finalNum
    }
  for (; num >= 1 ; num--){
    finalNum *= num
  }
  return finalNum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
