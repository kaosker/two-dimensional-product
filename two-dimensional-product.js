let twoDimensionalProduct = function(array){
    let count = 1;
    for (let i = 0; i < array.length; i++){
        let currentArr = array[i];

        for (let j = 0; j < currentArr.length; j++){
            count*= currentArr[j];
        }
    }
    return count;
};

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88


/* twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument.
The function should return the total product of all numbers multiplied together. */
