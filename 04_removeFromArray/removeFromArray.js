const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((element) => !toRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
