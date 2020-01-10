5; // // EXAM 3 Solve sudoku

const board = [
  ["7", ".", "4", "8", ".", ".", "3", ".", "1"],
  ["8", "2", ".", "5", ".", ".", ".", "4", "."],
  [".", ".", "9", "4", "3", ".", "5", ".", "."],
  ["3", "1", ".", ".", ".", ".", "8", ".", "7"],
  [".", "8", ".", ".", ".", ".", ".", "1", "."],
  ["9", ".", "7", ".", ".", ".", ".", "3", "2"],
  [".", ".", "6", ".", "1", "5", "4", ".", "."],
  [".", "7", ".", ".", ".", "9", ".", "6", "5"],
  ["5", ".", "8", ".", ".", "2", "1", ".", "3"]
];

function isValid(board, row, col, k) {
  for (let x = 0; x < 9; x++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(x / 3);
    const n = 3 * Math.floor(col / 3) + (x % 3);
    if (board[row][x] == k || board[x][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

function sudokuSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == ".") {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (sudokuSolver(data)) {
              return true;
            } else {
              data[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

sudokuSolver(board);
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
console.log(board[3]);
console.log(board[4]);
console.log(board[5]);
console.log(board[6]);
console.log(board[7]);
console.log(board[8]);

// console.log(board[0][8]);
