/**
 * Function that takes in an array of digits and returns a formatted phone number.
 */
function createPhoneNumber (array) {
    
    array.unshift('(');
    array.splice(4, 0, ') ');
    array.splice(8, 0, '-');
    let ph = array.join(" ");
    console.log(ph);
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// => returns "(123) 456-7890"