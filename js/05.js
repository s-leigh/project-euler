
const divisors = Array.from({length: 21}, (x, i) => i).filter(a => a > 2);
const isDivisible = (x) => divisors.map(divisor => x % divisor)
  .filter(result => result === 0)
  .length === divisors.length;

for (let i = 40; i < Infinity; i += 2) {
  if (isDivisible(i)) {
    console.log(i);
    break;
  }
}