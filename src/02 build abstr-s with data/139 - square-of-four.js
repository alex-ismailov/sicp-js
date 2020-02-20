

const squareOfFour = (tl, tr, bl, br) => (
  (painter) => stack(beside(tl(painter)), tr(painter)),
    beside(bl(painter), br(painter))
);

const flippedPairs = (painter) => {
  const combine4 = squareOfFour(turn_upside_down, flip_vert, flip_horiz, identity);
  return combine4(painter);
};

const squareLimit = (painter, n) => {
  const combine4 = squareOfFour(flip_horiz, identity, turn_upside_down, flip_vert);
  return combine4(corner_split(painter, n));
};