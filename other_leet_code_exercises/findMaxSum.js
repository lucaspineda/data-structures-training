function findMaxSum(numbers) {
  // Your code goes here

  if (numbers.length < 2) return 0;
  let highestNumber = -Infinity;
  let highestNumberIndex = null;
  let secondHighestNumber = -Infinity;

  numbers.forEach((number, index) => {
    if (number > highestNumber) {
      highestNumber = number;
      highestNumberIndex = index;
    }
  });

  numbers.forEach((number, index) => {
    if (number > secondHighestNumber && index !== highestNumberIndex) {
      secondHighestNumber = number;
    }
  });

  return highestNumber + secondHighestNumber;
}

  console.log(findMaxSum([ 5, 9, 7, 11 ])); // should print 20
  console.log(findMaxSum([ 4 ])); // should print 0
  console.log(findMaxSum([ 4, 5 ])); // should print 9