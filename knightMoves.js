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
  if (!isValidSquare(start) || !isValidSquare(end)) {
    throw new Error("Invalid squares as input");
  }
  if (arraysEqual(start, end)) {
    return [start];
  }
  const visitedSquares = [start];
  const squareQueue = [start];
  while (squareQueue.length > 0) {
    const square = squareQueue.shift();
    for (const move of knightMovesList) {
      const newSquare = square.map((num, i) => num + move[i]);
      // if the newSquare IS the end position, ...
      if (arraysEqual(newSquare, end)) {
        console.log(newSquare);
        return;
      }
      if (
        isValidSquare(newSquare) &&
        // and if the new square isn't contained inside of visitedSquares, ...
        !visitedSquares.some((visitedSquare) =>
          arraysEqual(visitedSquare, newSquare),
        )
      ) {
        visitedSquares.push(newSquare);
        squareQueue.push(newSquare);
        console.log(newSquare);
      } else {
        continue;
      }
    }
  }
}

function isValidSquare([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}
