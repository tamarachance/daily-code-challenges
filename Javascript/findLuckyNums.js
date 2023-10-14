/**
 * Write a function that takes in a maximum number and generates a set of random lucky numbers no longer than the maximum 
 * parameter with no repeating numbers 
 */
function findLuckyNumbers(n) {
    let newArray = [];
    for(i=0;i<n;i++) {
        let result = Math.floor(Math.random() * n + 1);
        if(!newArray.includes(result)) {
            newArray.push(result);
        }
    }
    newArray.toString;
    return newArray;
}

let luckyNumbers = findLuckyNumbers(10);

console.log('Your lucky numbers are: ' + luckyNumbers);