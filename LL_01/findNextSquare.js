function findNextSquare(num) {
    const square = Math.sqrt(num)
    if (square % 1 !== 0) return -1;
    let nextSquare = square + 1;
    return nextSquare * nextSquare;
}