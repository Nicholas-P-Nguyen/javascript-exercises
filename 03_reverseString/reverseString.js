const reverseString = function(text) {
    let charArray = text.split('');
    let lengthOfText = text.length - 1;
    let i;
    let result = "";
    for (i = lengthOfText; i >= 0; i--) 
    {
        result += charArray[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
