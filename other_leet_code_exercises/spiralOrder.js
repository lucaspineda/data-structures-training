/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  xLength = matrix[0].length;
  yLength = matrix.length;

  totalLength = xLength * yLength;

  xLimit = xLength - 1;
  yLimit = yLength - 1;

  leftBoundary = 0;
  upBoundary = 0;
  rightBoundary = xLimit;
  downBoundary = yLimit;

  res = [];

  while (res.length < totalLength) {
    for (let j = leftBoundary; j <= rightBoundary; j++) {
      res.push(matrix[upBoundary][j]);
    }
    if(res.length >= totalLength) break
    upBoundary += 1;

    for (let j = upBoundary; j <= downBoundary; j++) {

      res.push(matrix[j][rightBoundary]);
    }
    if(res.length >= totalLength) break
    rightBoundary -= 1;

    for (let j = rightBoundary; j >= leftBoundary; j--) {
      res.push(matrix[downBoundary][j]);
    }
    if(res.length >= totalLength) break
    downBoundary -= 1;

    for (let j = downBoundary; j >= upBoundary; j--) {
      res.push(matrix[j][leftBoundary]);
    }
    if(res.length >= totalLength) break
    leftBoundary += 1;
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
