/**
 * A function to find square roots
 */

const perfectSquare = (num) => {
    if (Number.isInteger(num)) {
        let nextSqRt = Math.floor(Math.sqrt(num) + 1);
        let nextPerfectSquare = (nextSqRt * nextSqRt);
        return nextPerfectSquare;
    }
}


console.log(perfectSquare(9)); // should return 16 (3x3=9, 4x4=16)