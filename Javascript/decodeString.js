/**
 * Write function that takes in a string parameter and decodes the string using the first character
 * as the cipher. Return the secret message. 
 */
const decoder = code => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let splitStr = code.split('')
    let result = ''
    let cipher = Number(splitStr[0]);
    for (let i = 1; i < splitStr.length; i++) {
      let index = alphabet.indexOf(splitStr[i]) + cipher;
      result += alphabet.charAt(index);
    }
  
    return result
  }

  console.log(decoder("2ucjamkc"));