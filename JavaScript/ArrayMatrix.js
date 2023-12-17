let matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrixB = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrixSum = (matrixA, matrixB) => {
  let results = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixB[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    results.push(row);
  }
  return results;
};
let matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);
