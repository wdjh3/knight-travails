export { knightMoves };

const knightMovesList = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function knightMoves([start, end]) {
  const visitedSquares = [];
  if (!isValidSquare(start), !isValidSquare(end)) {
    throw new Error("Invalid squares as input")
  }
}

function isValidSquare([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}
