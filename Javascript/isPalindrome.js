/**
 * A Boolean function that recognizes a palindrome.
 */

let arr = ["r","a","c","e","c","a","r"]
let newArr = []
function isPalindrome(arr) {
    let j = arr.length -1
    for(let i = 0; i < (arr.length -1)/2; i++) {
        if(arr[i] !== arr[j]) {
            return false
        } 
        j--;
        return true;
    }
}
console.log(isPalindrome("racecar"));