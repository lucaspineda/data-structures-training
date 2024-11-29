let smallestMultiple = null
const numbers = 20

let i = 1
for (let j = 1; j <= numbers; j++) {
  if (i % j !== 0) {
    i++
    j = 1
  }
  if (j === 20) {
    smallestMultiple = i
    break
  }
}

console.log(smallestMultiple, 'result')