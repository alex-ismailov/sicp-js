/* https://sourceacademy.nus.edu.sg/login */

const rightSplit = (painter, n) => {
  if(n === 0) {
      return painter;
  } else {
      const smaller = rightSplit(painter, n - 1);
      return beside(painter, stack(smaller, smaller));
  }
};

const upSplit = (painter, n) => {
  if(n === 0) {
    return painter;
  } else {
    const smaller = upSplit(painter, n - 1);
    return stack(beside(smaller, smaller), painter);
  }
};

const cornerSplit = (painter, n) => {
  if(n === 0) {
      return painter;
  } else {
      const up = upSplit(painter, n - 1);
      const right = rightSplit(painter, n - 1);
      const topLeft = beside(up, up);
      const bottomRight = stack(right, right);
      const corner = cornerSplit(painter, n - 1);
      return stack(beside(topLeft, corner), 
          beside(painter, bottomRight));
  }
};

const squareLimit = (painter, n) => {
  const quarter = cornerSplit(painter, n);
  const upperHalf = beside(flip_horiz(quarter), quarter);
  const lowerHalf = beside(turn_upside_down(quarter), flip_vert(quarter));
  return stack(upperHalf, lowerHalf);
};

show(squareLimit(heart, 4));
