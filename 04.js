const isPalindrome = num => {
  const numString = String(num);
  const stringLength = numString.length;
  return numString.substring(0, Math.floor(stringLength / 2)) === numString.substring(Math.ceil(stringLength / 2), stringLength).split('').reverse().join('');
};

const factors = Array.from({length: 999}, (x, i) => i).filter(x => x >= 100);
const products = factorsArray => [].concat(...(factorsArray.map(factor => factorsArray.map(otherFactor => factor * otherFactor))));
const uniqueProducts = [...new Set(products(factors))];
const uniqueProductsDesc = uniqueProducts.sort((a, b) => b - a);
const maxPalindrome = uniqueProductsDesc.filter(num => isPalindrome(num))[0];

console.log(maxPalindrome);