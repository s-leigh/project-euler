"use strict";

// const LIMIT = 2000001;

const isPrime = candidate => {
  for (let j = Math.ceil(candidate / 2); j >= 2; j--) {
    if (candidate % j === 0) return false
  }
  return true;
};

// const nextPrime = (lastPrime) => {
//   if (isPrime(lastPrime + 2)) return lastPrime + 2;
//   else return nextPrime(lastPrime + 2);
// };
//
// const adder = (prime, sum, limit) => {
//   if (prime > limit) return sum;
//   const next = nextPrime(prime);
//   return adder(next, (sum + prime), limit)
// };



const LIMIT = 2000001;
// const LIMIT = 200;

const twoMillion = Array.from({length: LIMIT}, (x, i) => i).slice(3);
const twoMillionOdds = Array.from({length: LIMIT}, (x, i) => i)
  .slice(2)
  .filter(b => b % 2 !== 0);

let sum = 0;
twoMillionOdds.forEach(num => {
  if (isPrime(num)) sum += num;
});

console.log(sum + 2);

// console.log(twoMillionOdds)

// let primes = twoMillionOdds;
// twoMillion.forEach(num => {
//   // console.log('num', num)
//   primes = primes.filter(candidate => (candidate <= num) || (candidate % num !== 0))
// });
//
// const sum = primes.reduce((prev, curr) => prev + curr) + 2;
//
// console.log(sum);





// console.log(adder(3, 5, 1000000))

// for (let a = 2; a < LIMIT; a += nextPrime()) {
//   let prime = nextPrime(a);
//   console.log(nextPrime(prime));
// }

// const getPrimes = (limit) => {
//   for (let a = 2; a < limit; a++) {
//     if (isPrime(a)) return a;
//   }
// };

// const primes = (lastPrime, limit) => {
//   if (lastPrime > limit) return null;
//   const thisPrime = nextPrime(lastPrime);
//   console.log(thisPrime);
//   return primes(thisPrime)
// };

// console.log(primes(2, 20));