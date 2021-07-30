const nthTriangularNumber = n => {
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += i;
  }
  return number;
};

// const nthTriangularNumber = (n) => {
//   if (n === 1) return n;
//   return n + nthTriangularNumber(n - 1)
// };

const numberOfFactors = number => {
  let factorCount = 2;  // 1 and number are always factors
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (i === Math.sqrt(number)) factorCount++;
    else if (number % i === 0) factorCount += 2;  // i and the number i multiplies by
  }
  return factorCount;
};

for (let j = 1; j < Infinity; j++) {
  const factorsNum = numberOfFactors(nthTriangularNumber(j));
  console.log(factorsNum);
  if (factorsNum > 500) {
    console.log(nthTriangularNumber(j));
    break;
  }
}
