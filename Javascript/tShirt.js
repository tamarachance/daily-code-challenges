/**
 * A function that takes in a string containing only the letters s, m, & l and returns a string of the letters sorted
 * in order from greatest to least.
 */
let tshirtSorter = str =>{
    str = str.trim().toLowerCase().split("");

    let sortedTShirts = str.sort().reverse().join("");
        
    return sortedTShirts;
}
console.log(tshirtSorter('lms'));
console.log(tshirtSorter('smllms'));