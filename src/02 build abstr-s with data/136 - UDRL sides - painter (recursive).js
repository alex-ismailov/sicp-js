/* https://sourceacademy.nus.edu.sg/login */

const upSplit = (painter, n) => {
  if(n === 0) {
    return painter;
  } else {
    const smaller = upSplitter(painter, n - 1);
    return stack(beside(smaller, smaller), painter);
  }
};

const downSplit = (painter, n) => {
  if(n === 0) {
    return painter;
  } else {
    const smaller = downSplit(painter, n - 1);
    return stack(painter, beside(smaller, smaller));
  }
};

const rightSplit = (painter, n) => {
  if(n === 0) {
      return painter;
  } else {
      const smaller = rightSplit(painter, n - 1);
      return beside(painter, stack(smaller, smaller));
  }
};

const leftSplit = (painter, n) => {
  if(n === 0) {
      return painter;
  } else {
      const smaller = leftSplit(painter, n - 1);
      return beside(stack(smaller, smaller), painter);
  }
};

const downRight = (painter, n) => {
  if(n === 0) {
    return painter;
  } else {
    const smaller = downRight(painter, n - 1);
    return beside(painter, stack(painter, smaller));
  }
};

const downLeft = (painter, n) => {
  if(n === 0) {
    return painter;
  } else {
    const smaller = downLeft(painter, n - 1);
    return beside(stack(painter, smaller), painter);
  }
};
