const n = 10001;

// const removeMultiples = (divisor, list) => list.filter(val => val === divisor || val % divisor !== 0);
//
// // const sieve = (arr, divisor) => {
// //   if (divisor === LIMIT) return arr;
// //   const remainingNums = removeMultiples(divisor, arr);
// //   return sieve(remainingNums, divisor + 1)
// // };
//
// let integerList = Array.from({length: LIMIT + 1}, (x, i) => i).slice(2);
//
// integerList.forEach(integer => {
//   integerList = removeMultiples(integer, integerList)
//   if (integerList.length === n) return integerList[n - 1]
// });
//
// console.log(integerList)
//
// const nthPrime = integerList[n - 1];
//
// console.log(nthPrime);

const notDivisibleByAny = (num, arr) => {
  return arr.filter(value => num % value !== 0).length === arr.length;
};

const primeList = [2];
for (let i = 3; i < Infinity; i += 2) {
  if (primeList.length === n) break;
  if (notDivisibleByAny(i, primeList)) primeList.push(i);
}

console.log(primeList[n - 1]);