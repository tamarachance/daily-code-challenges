/**
 * Take a string which contains duplicate letters and return a string of only the unique letters.
 */

let makeUniq = (str) => {
    let array = str.split("");
    let filteredArr = [];
    for (let item in array) {
        if(!filteredArr.includes(array[item])) {
            filteredArr.push(array[item]);
        }
    }
    filteredArr = filteredArr.join("")
    console.log(filteredArr);
}

makeUniq('helloworld')