const firstHundred = Array.from({length: 101}, (x, i) => i);

const sumOfSquares = (arr) => arr.map(x => Math.pow(x, 2)).reduce((accumulator, currentValue) => accumulator + currentValue);
const squareOfSums = (arr) => Math.pow(arr.reduce((accumulator, currentValue) => accumulator + currentValue), 2);

console.log(squareOfSums(firstHundred) - sumOfSquares(firstHundred));