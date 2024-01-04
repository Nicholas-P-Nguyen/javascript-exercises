const sumAll = function(numOne, numTwo) {
    let i;
    let numBig;
    let numSmall;
    let output = 0; 
    
    // Edge case
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) 
    {
        return "ERROR";
    }    
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    // Determine the bigger number
    if (numOne > numTwo)
    {
        numBig = numOne;
        numSmall = numTwo;
    }
    else
    {
        numBig = numTwo;
        numSmall = numOne;
    }

    for (i = numSmall; i <= numBig; i++) 
    {
        output += i;
    }
    return output;
    
};

// Do not edit below this line
module.exports = sumAll;
