// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     const hashMap = new Map([
//         ['I',1],
//         ['IV', 4],
//         ['V',5],
//         ['IX', 9],
//         ['X',10],
//         ['XL',40],
//         ['L',50],
//         ['XC',90],
//         ['C',100],
//         ['CD',400],
//         ['D',500],
//         ['CM',900],
//         ['M',1000],
//     ])

//     // console.log(hashMap)

//     let result = 0

//     for (let i = 0; i < s.length; i++) {
//         const currentDoubleChars = s[i] + s[i+1]
//         const currentChar = s[i]
//         if(s[i+1] && hashMap.has(currentDoubleChars)) {
//             result = result + hashMap.get(currentDoubleChars)
//             i++
//         } else if (hashMap.has(currentChar)) {
//             result = result + hashMap.get(currentChar)

//         }
        
//     }

//     return result
    
// };

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let M =
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum = 0

    for (let i = 0; i < s.length; i++) {
        if((s[i + 1]) && M[s[i + 1]] > M[s[i]]) {
            sum = sum - M[s[i]]
        }
        else {
            sum = sum + M[s[i]]
        }
        
    }
    return sum;
};

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('LIX'))
console.log(romanToInt('MCMXCIV'))
// console.log(romanToInt('III'))
// console.log(romanToInt('III'))
// console.log(romanToInt('III'))
// console.log(romanToInt('III'))