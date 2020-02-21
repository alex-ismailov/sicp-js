import { l, isEmpty, cons } from "@hexlet/pairs-data";
import { lFilter, flatMap, lMap, enumerateInterval, foldRight, show } from "../../libs/seqlib";

// const queens = (boardSize) => {
//   const queenCols = (k) => {
//     if (k === 0) {
//       return l(emptyBoard)
//     }
//     return lFilter((positions) => safeIt(k, positions), 
//       flatMap((restOfQueens) => lMap((newRow) => adjoinPos(newRow, k, restOfQueens),
//         enumerateInterval(1, boardSize)),
//         queenCols(k - 1)));
//   };
//   return queenCols(boardSize);
// };

const adjoinPos = (row, col, rest) => (
  cons(cons(row, col), rest)
);

const emptyBoard = l();

const isSafe = (k, positions) => {
  const firstRow = head(head(positions));
  const firstCol = tail(head(positions));
  return foldRight((pos, soFar) => {
    const row = head(pos);
    const col = tail(pos);
    return soFar &&
      firstRow - firstCol !==
      row - col &&
      firstRow + firstCol !==
      row + col &&
      firstRow !== row; 
  }, true, tail(positions))
};

const queens = (boardSize) => {
  const queenCols = (k) => (
    k === 0
      ? l(emptyBoard)
      : lFilter((positions) => isSafe(k, positions),
          flatMap((restOfQueens) => lMap((newRow) => adjoinPos(newRow, k, restOfQueens),
            enumerateInterval(1, boardSize)),
          queenCols(k - 1)))
  );
  return queenCols(boardSize);
};

show(queens(8)); // It is not work !!!!

