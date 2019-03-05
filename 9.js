const test = (triplet) => triplet.reduce((acc, curr) => acc + curr) === 1000;

const perfectSquares = Array.from({length: 1000}, (x, i) => Math.pow(i, 2)).slice(1);

const sides = [];

perfectSquares.forEach(a => {
  perfectSquares.forEach(b => {
    sides.push([Math.sqrt(a), Math.sqrt(b), Math.sqrt(a + b)]);
  })
});

const triplet = new Set(...sides.filter(potentialTriplet => test(potentialTriplet)).sort((a, b) => b - a));

console.log(Array.from(triplet).reduce((acc, curr) => acc * curr));