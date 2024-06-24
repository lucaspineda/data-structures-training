
function consecutiveSequence(matrix) {
  let consecutivesIndexes = [];

  const rows = matrix[0].length
  const columns = matrix.length
  let currentConsecs = []

  for (let j = 0; j < rows; j++) {
    currentConsecs = [[0, j]]
    for (let i = 1; i < columns; i++) {
      if (matrix[i-1][j] + 1 === matrix[i][j]) {
        currentConsecs.push([i, j]);
        if (i === columns - 1 && currentConsecs.length >= 3) {
            consecutivesIndexes.push(currentConsecs)
        }
      } else {
        if (currentConsecs.length >= 3) {
            consecutivesIndexes.push(currentConsecs)
        }
        currentConsecs = [[i,j]];
      }
    }
  }

  for (let i = 0; i < columns; i++) {
    currentConsecs = [[i, 0]]
    for (let j = 1; j < rows; j++) {
      if (matrix[i][j - 1] + 1 === matrix[i][j]) {
        currentConsecs.push([i, j]);
        if (j === rows - 1 && currentConsecs.length >= 3) {
            consecutivesIndexes.push(currentConsecs)
        }
      } else {
        if (currentConsecs.length >= 3) {
            consecutivesIndexes.push(currentConsecs)
        }
        currentConsecs = [[i,j]];
      }
    }
  }
  flatenConsecutivesIndexes = consecutivesIndexes.flat()
  for (let i = 0; i < flatenConsecutivesIndexes.length; i++) {
    matrix[flatenConsecutivesIndexes[i][0]][flatenConsecutivesIndexes[i][1]] = 0
  }
  console.log(matrix) // return
}

matrix1 = [
  [1, 2, 3, 4],
  [2, 5, 4, 1],
  [3, 6, 5, 1],
  [5, 6, 5, 1],
  [4, 6, 5, 1],
  [5, 6, 5, 1],
  [6, 6, 5, 1],
];

// matrix = [
//     [1, 2],
//     [2, 5],
//     [3, 6],
//     [8, 6],
//     [1, 6],
//     [2, 6],
//     [3, 6],
//   ];

consecutiveSequence(matrix1)

function consecutiveArray(array) {
  consecIndexes = [];
  currentConsecs = [0];

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] + 1 == array[i]) {
      currentConsecs.push(i);
      if (i === array.length - 1 && currentConsecs.length >= 3) {
        consecIndexes.push(currentConsecs);
      }
    } else {
      if (currentConsecs.length >= 3) {
        consecIndexes.push(currentConsecs);
      }
      currentConsecs = [i];
    }
  }

  const joinedArray = consecIndexes.flat()

  for (let i = 0; i < joinedArray.length; i++) {
    array[joinedArray[i]] = 0
  }

  console.log(array, "consecc");
}

matrix2 = [
  [1, 2, 3, 4],
  [2, 5, 4, 1],
  [3, 6, 5, 1],
  [5, 6, 5, 1],
  [4, 6, 5, 1],
  [5, 6, 5, 1],
  [6, 6, 5, 1],
];

consecutiveArray(matrix2)



// consecutiveArray([1,2,3])
