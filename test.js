numberOfFactors = function(input) {
    // Your code goes here
//    var number = input;
    var input = parseInt(input);
    var numbersToCheck = [];
    for (var i = 1; i <= input; i++) {
        numbersToCheck.push(i);
    }
    var factors = [];
    for (var j = 0; j < numbersToCheck.length; j++){
        var remainder = input % numbersToCheck[j];
        if (remainder === 0) {
            factors.push(remainder);
        } else {
        }
    }
    return factors.length;
};

console.log (numberOfFactors(6));
