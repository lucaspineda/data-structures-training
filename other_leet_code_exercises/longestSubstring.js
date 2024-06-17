/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const final = []
    const currentMap = new Map()
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++){
            if (!currentMap.has(s[j])) {
                currentMap.set(s[j], true)
            } else {
                if(currentMap.size > maxLength) {
                    maxLength = currentMap.size
                }
                currentMap.clear()

            }
            // console.log(currentMap, 'currentMap')
            if(currentMap.size > maxLength) {
                maxLength = currentMap.size
            }

        }
        currentMap.clear()
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('dvdf')) //3
console.log(lengthOfLongestSubstring('abc')) //3
console.log(lengthOfLongestSubstring('abca')) //3
console.log(lengthOfLongestSubstring('bbbb')) //1
console.log(lengthOfLongestSubstring('anviaj')) //5
console.log(lengthOfLongestSubstring('pwwkew')) //3