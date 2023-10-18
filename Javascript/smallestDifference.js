/**
 * Function finds the smallest difference between any two numbers given a pair of arrays.
 */

let arr1 = [10, 20, 14, 16, 18];
let arr2 = [30, 23, 54, 33, 96];

const smallestDifference = (arr1, arr2) => {
    let largest = Math.max(...arr1);
    let smallest = Math.min(...arr2);
    let difference = smallest - largest;
    console.log(difference);
}

smallestDifference(arr1, arr2);