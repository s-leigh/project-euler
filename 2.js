const SUM_FIBS_LOWER_THAN = 4000000;

function* getNextFib(limit) {
  let lastFibs = [];
  if (lastFibs.length < 1) {
    lastFibs = [1];
    yield 1;
  }
  if (lastFibs.length < 2) {
    lastFibs = [1, 2];
    yield 2;
  }
  for (let i = 0; i <= limit; i=lastFibs[1]) {
    const thisFib = lastFibs.reduce((acc, curr) => acc + curr);
    lastFibs = [lastFibs[1], thisFib];
    yield thisFib;
  }
}

let sumOfEvens = 0;
const nextFib = getNextFib(SUM_FIBS_LOWER_THAN);
while(true) {
  const thisFib = nextFib.next();
  if(!thisFib.done) {
    if (thisFib.value % 2 === 0) {
      sumOfEvens += thisFib.value;
    }
  } else {
    console.log(sumOfEvens);
    break;
  }
}