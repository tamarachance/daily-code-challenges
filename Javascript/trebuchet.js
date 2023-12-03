/**
 * Given a list of text values, with each string containing one or more numbers,
 * write a function that extracts the first and last single-digit number from each string and
 * concatenates those numbers to form a new two-digit number. The function should return
 * the sum of all values.
 */

function sumCalibrationValues(amendedStrings) {
    let calibrationValues = [];
    amendedStrings.forEach(str => {
        str = str.match(/\d+/g);
        str = Number(str[0] + str[str.length - 1]);
        calibrationValues.push(str);
    });
    console.log(calibrationValues);
    calibrationValues = calibrationValues.reduce((pv, cv) => pv + cv);
    console.log(calibrationValues);
}

sumCalibrationValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]);

//Expect 12, 38, 15, and 77 to sum to 142