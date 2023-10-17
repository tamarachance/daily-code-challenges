/**
 * Function that translates a string into pig latin.
 */
function sent (str) {
    let sentArr = str.split(" ");
    for(let i=0; i<sentArr.length; i++) {
        let newWord = sentArr[i].split("");
        let vowels = ["a", "e", "i", "o","u"];
        let firstLetter = newWord[0];
        if(vowels.includes(firstLetter)) {
            newWord.push("yay");
            
        } else {
            newWord.shift();
            newWord.push( firstLetter + "ay");
        }
        let pigLatinSent = [newWord.join("")];
        pigLatinSent = pigLatinSent.join("+");
        console.log(pigLatinSent);
    }
    
}
sent("porcupines are cute");
