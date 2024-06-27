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



// console.log(twoSum([11,15,2,7], 9))


var twoSumOptmized = function(nums, target) {
    
    const numsHash = new Map()

    nums.forEach((num, index) => {
        numsHash.set(num, index)
    })
    console.log(numsHash)
    for (let i = 0; i < nums.length; i++) {
        const currentDifference = target - nums[i]
        if(numsHash.has(currentDifference) && numsHash.get(currentDifference) !== i) {
            return [i, numsHash.get(currentDifference)]
        }
    }
};

console.log(twoSumOptmized([3,3], 6))
