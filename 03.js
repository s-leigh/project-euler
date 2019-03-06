const NUM = 600851475143;

const isDivisible = (numerator, divisor) => numerator % divisor === 0;

const highestPrimeFactor = (numerator, divisor) => {
  if (numerator === 1) return divisor;
  if (isDivisible(numerator, divisor)) {
    const newNumerator = numerator / divisor;
    return highestPrimeFactor(newNumerator, divisor)
  } else {
    return highestPrimeFactor(numerator, divisor + 1)
  }
};

console.log(highestPrimeFactor(NUM, 2));


// Super slow way
//
// const factorList = [];
//
// for (let i = Math.floor(NUM / 2); i >= 1; i--) {
//   if (NUM % i === 0) {
//     console.log(`Factor found: ${i}`);
//     factorList.push(i);
//   }
// }
//
// console.log(`Factors: ${factorList}`);
//
// const isPrime = (num) => {
//   for (let j = 2; j <= (num / 2); j++) {
//     if (num % j === 0) return false
//   }
//   return true;
// };
//
// const primeFactorList = factorList.filter(element => isPrime(element));
//
// console.log(`Prime factors: ${primeFactorList}`);