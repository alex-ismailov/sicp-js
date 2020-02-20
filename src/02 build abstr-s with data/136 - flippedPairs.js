/* https://sourceacademy.nus.edu.sg/login */

const flippedPairs = (painter) => {
  const painter2 = beside(painter, flip_vert(painter));
  return stack(painter2, painter2);
};

const wave4 = (flippedPairs(heart));

show(flippedPairs(heart));
