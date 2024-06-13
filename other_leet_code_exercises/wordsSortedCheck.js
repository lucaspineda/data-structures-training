// check if words are correctly sorted accordingly to alien alphabet

// Input: words = ['hello', 'uber'], order = 'huabcdefgiklmno'
// Output: true

// Input: words = ['word' ,'world', 'row'], order = 'worldabcefghijkmnpqstuvxyz'
// Output: false

// Input: words = ['word', 'wor', 'row'], order = 'worldabcefghijkmnpqstuvxyz'
// Output: false

// hello , uber - huabcdefgiklmno

function checkSortedWords(words, order) {
    for (let i = 1; i < words.length; i++) {
        previousWord = words[i-1]
        currentWord = words[i]
        // console.log(previousWord, currentWord)
        longestCurrentWord = previousWord.length > currentWord.length ? previousWord : currentWord
        for (let j = 0; j < longestCurrentWord.length; j++) {
            const previousWordIndex = previousWord[j] ? order.indexOf(previousWord[j]) : - 1;
            const currentWordIndex = currentWord[j] ? order.indexOf(currentWord[j]) : -1;
            // console.log(previousWord[j], currentWord[j], previousWordIndex, currentWordIndex)
            if (previousWordIndex > currentWordIndex) {
                return false
            } else if (previousWordIndex < currentWordIndex) {
                break
            }
        }
    }
    return true
}

console.log(checkSortedWords(['hello', 'uber', 'hello'], 'huabcdefgiklmno')) // false
console.log(checkSortedWords(['hello', 'uber'], 'huabcdefgiklmno')) // true
console.log(checkSortedWords(['word' ,'world', 'row'], 'worldabcefghijkmnpqstuvxyz')) // false
console.log(checkSortedWords(['word', 'wor', 'row'], 'worldabcefghijkmnpqstuvxyz')) // false
console.log(checkSortedWords(['wor', 'word', 'row'], 'worldabcefghijkmnpqstuvxyz')) // true


// First Solution Complexity: Big O(nˆ3)

function sumNumber (arr) {
    let sum = 0
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index]
    }
    console.log(sum)
}

sumNumber([5,10], 2)