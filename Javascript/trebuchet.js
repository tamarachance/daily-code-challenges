/**
 * Given a list of text values, with each string containing one or more numbers,
 * write a function that extracts the first and last single-digit number from each string and
 * concatenates those numbers to form a new two-digit number. The function should return
 * the sum of all values.
 */

function sumCalibrationValues(amendedStrings) {
    let calibrationValues = [];
    for(i=0;i<amendedStrings.length;i++) {
        let twoDigitNum;
        let digits = amendedStrings[i].match(/\d+/g);
        if(digits.length > 1) {
            let firstDigit = digits.shift();
            let lastDigit = digits.pop();
            twoDigitNum = Number(firstDigit + lastDigit);
            calibrationValues.push(twoDigitNum);
        } else if(digits.length===1) {
            twoDigitNum = Number(digits[0] + digits[0]);
            calibrationValues.push(twoDigitNum);
        }
    }
    console.log(calibrationValues);
    calibrationValues = calibrationValues.reduce((acc, cv) => acc + cv);
    console.log(calibrationValues);
}

sumCalibrationValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]);

//Expect 12, 38, 15, and 77 to sum to 142