const randomInit = 3;

const randUpdate = (n) => Math.floor(Math.random() * n);

const makeRandom = () => {
  let x = randomInit;
  return () => {
    x = randUpdate(x);
    return x;
  };
};

const rand = makeRandom();

/* testing */
console.log(rand());
