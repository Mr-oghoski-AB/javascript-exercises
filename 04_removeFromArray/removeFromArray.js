const removeFromArray = function(arr1, ...num) {
   let newArray = arr1.filter((element, index) => {
        if ( !num.includes(element)){
            return element;
        }
       
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
