const removeFromArray = function(array, ...remove) {
    resultArray = [];

    array.forEach((item) => 
    {
        if (!remove.includes(item))
        {
            resultArray.push(item);
        }
    });
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
