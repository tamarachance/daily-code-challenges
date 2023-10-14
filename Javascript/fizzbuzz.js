/**
 * Write a function to demonstrate the modulus operater where the function outputs a list of numbers. For any number evenly
 * divisible by 3, it outputs the Fizz instead. And for any number evenly divisible by 5, it outputs the word Buzz, instead.
 * And for any number evenly divisible by both 3 and 5, it outputs the word FizzBuzz.
 */
function findFizzBuzz () {
    let fizzBuzz = [];
    for (i = 1; i < 51; i++) {
        if (i%3 === 0 && i%5 === 0) {
            fizzBuzz.push("FizzBuzz");
        } else if (i%3 === 0) {
            fizzBuzz.push("Fizz");
        } else if (i%5 === 0) {
            fizzBuzz.push("Buzz");
        } else {
            fizzBuzz.push(i);
        }
    }
    if (fizzBuzz.length > 0) {
        return fizzBuzz;
    }
}

console.log(findFizzBuzz());