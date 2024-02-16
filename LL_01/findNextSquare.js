function findNextSquare(num) {
  const square = Math.sqrt(num);
  if (square % 1 !== 0) return -1;
  let nextSquare = square + 1;
  return nextSquare * nextSquare;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(23)); // -1
