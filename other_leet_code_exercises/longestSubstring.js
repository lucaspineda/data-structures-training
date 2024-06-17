/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length
    let maxLength = 0
    charMap = new Map()
    let left = 0

    for (let right = 0; right < n; right ++) {
        console.log(s[left], s[right] , left, right)
        if(!charMap.has(s[right]) || charMap.get(s[right]) < left) {
            charMap.set(s[right], right)
            maxLength = Math.max(maxLength, right - left + 1)
            } else {
                left = charMap.get(s[right]) + 1
                charMap.set(s[right], right)
            }
        console.log(charMap)
    }
    return maxLength
};

// console.log(lengthOfLongestSubstring('dvdf')) //3
// console.log(lengthOfLongestSubstring('abc')) //3
// console.log(lengthOfLongestSubstring('abca')) //3
// console.log(lengthOfLongestSubstring('bbbb')) //1
// console.log(lengthOfLongestSubstring('anviaj')) //5
// console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('tmmzuxt')) //3