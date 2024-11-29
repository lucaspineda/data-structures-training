const getMultiplesOf = (numbers) => {


  let result = 0
  let resultArr = new Set()
  numbers.forEach(number => {
    for (let index = 0; index < 1000; index++) {
      if(index % number === 0) {
        resultArr.add(index)
      }
    }
  });

  resultArr.forEach(number => {
    result += number
  })

  return result
}

console.log(getMultiplesOf([3,5]))
