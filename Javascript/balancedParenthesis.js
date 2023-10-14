/**
 * A function that takes in a string and determines whether the string has parentheses. If the string has both the opening
 * and closing set of parentheses, it returns true, otherwise it returns false.
 */

const hasBothParenthesis = (str) => {
    str = str.split("");
    let stck = [];
    str.forEach(element => {
        if (element === '(') {
            stck.push(element);
        } else if (element === ')') {
            stck.pop();
        }
    });
    if(stck.length != 0) {
        console.log(false);
    } else {
        console.log(true);
    }
    
}


hasBothParenthesis("(Oh Noes!)()");