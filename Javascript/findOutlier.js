/**
 * Given an array with no less than 3 integers where all of the values are either even or odd with a single value that is
 * opposite, write a function that finds the outlier integer.
 */
let ex1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let ex2 = [160, 3, 1719, 19, 11, 13, -21]

function findOutlier (array) { 
    let evens = []
    let odds = [] 
    for (let int in array) {
        if (array[int] % 2 === 0) {
            evens.push(array[int])
        } else { 
            odds.push(array[int])
        }
    }

    if (odds.length > evens.length) {
        return evens
    } else {
        return odds
    }
            
}

let outlier1 = findOutlier(ex1);
let outlier2 = findOutlier(ex2);

console.log(outlier1, outlier2);

