/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // const result = []

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(i, j)
            if(nums[i] + nums[j] === target) {
                // result.push([i, j])
                return [i, j]
            }
        }
    }

    return result
    
};

console.log(twoSum([11,15,2,7], 9))