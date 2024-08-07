const findTheOldest = function(arr) {
    const date = new Date().getFullYear()

    let oldest = arr.sort((first,second) => {

        if (first.yearOfDeath == undefined){
            first.yearOfDeath = date
        }
        if (second.yearOfDeath == undefined){
            second.yearOfDeath = date
        }

        if ((first.yearOfDeath - first.yearOfBirth) > (second.yearOfDeath - second.yearOfBirth)){
            return -1
        } else{
            return 1
        }
    });
    return oldest[0]


    
};

// Do not edit below this line
module.exports = findTheOldest;
