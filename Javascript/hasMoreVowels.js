/**
 * Design a Boolean function that compares the number of vowels in a word to the number of consenants and returns
 * either true or false.
 */

const hasMoreVowels = (word) => {
    let hasVowels = word.match(/['aeiou']/ig);
    let hasAlpha = word.match(/['bcdfghjklmnpqrstvwxyz']/ig);
    if(hasVowels.length > hasAlpha.length) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels('hasMoreVolwels'));