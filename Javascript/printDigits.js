/**
 * A function that takes in a number argument and reverses the digits.
 */

let printDigits = num =>{
    let digits = Number(num.toString().split("").reverse().join(""));
    console.log(digits);
}

printDigits(123456789);