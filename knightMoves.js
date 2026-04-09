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
  const squareQueue = [new Node(start, null)];
  while (squareQueue.length > 0) {
    const square = squareQueue.shift();
    for (const move of knightMovesList) {
      const newSquare = new Node(square.square.map((num, i) => num + move[i]), square);
      // if the newSquare IS the end position, ...
      if (arraysEqual(newSquare.square, end)) {
        let path = [];
        let current = newSquare;
        while (current) {
          path.push(current.square);
          current = current.parent;
        }
        path.reverse();
        return path;
      }
      if (
        isValidSquare(newSquare.square) &&
        // and if the new square isn't contained inside of visitedSquares, ...
        !visitedSquares.some((visitedSquare) =>
          arraysEqual(visitedSquare, newSquare.square),
        )
      ) {
        visitedSquares.push(newSquare.square);
        squareQueue.push(newSquare);
      } else {
        continue;
      }
    }
  }
}

class Node {
  constructor(square, parent) {
    this.square = square;
    this.parent = parent;
  }
}

function isValidSquare([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}
