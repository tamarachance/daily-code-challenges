/**
 * Function finds missing numbers in an array
 */
let missingNumbers = (arr, maxNum) => {
    let nums = [];
    for(i=0; i<maxNum; i++) {
        if(!arr.includes(i+1)) {
            nums.push(i+1);
        }
    }
    return nums;
}
console.log(missingNumbers([1, 2, 3, 4, 5, 7, 9, 10], 10));
