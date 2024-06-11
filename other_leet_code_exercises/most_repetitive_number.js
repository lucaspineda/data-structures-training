// Find the number that gets more repetitions in a array


function FindElementWithHighestFrequency(array) {
    const numbersHashmap = {}

    for(const number of array) {
        // console.log(number)
        if(number in numbersHashmap) {
            numbersHashmap[number]++
        } else {
            numbersHashmap[number] = 1
        }
    }

    let highestValue = 0
    let keyOfHighestValue = null

    for(const [key, value] of Object.entries(numbersHashmap)){
        if(value > highestValue) {
            highestValue = value
            keyOfHighestValue = key
        }
    }

    return keyOfHighestValue
}


console.log(FindElementWithHighestFrequency([2,2,2,3,3]))
console.log(FindElementWithHighestFrequency([2,5,5,5,5,5]))
console.log(FindElementWithHighestFrequency([2,2,2,3,3,3]))
console.log(FindElementWithHighestFrequency([2,2,2,3,3,3,3,3]))
console.log(FindElementWithHighestFrequency([3,3,4,2,2,2,2,2,4,5,2,5,6,2,8,2,2]))