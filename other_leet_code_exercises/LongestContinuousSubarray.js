// Given an array of integers nums and an integer limit,
// return the size of the longest non-empty subarray such that the absolute difference
// between any two elements of this subarray is less than or equal to limit.

// set a var longest = []
// set pointer to the starting var - initially = arr[0]
// set pointer to end var - initially = arr[1]
// add start pointer to aux array
// loop arr if pointers diff are less than limit
// if true add end pointer to auxArr
    // update end pointer to start + 1
// if false update start pointer (break) to start + 1
    // update end pointer to new start + 1


    // 2, 3, 2, 6, 10, limit: 3



    // [8,2,4,7]

function longestSubarray(nums, limit) {
    let longestSequence = []
    let auxArray = []
    let lowestValue = nums[0]
    let maxValue = nums[0]
    for(let i = 0; i < nums.length - 2; i++) {
        startPointer = nums[i]
        // console.log('avancou', startPointer)
        endPointerIndex = i + 1
        auxArray.push(startPointer)
        for(endPointerIndex; endPointerIndex < nums.length; endPointerIndex++) {
            // console.log(endPointerIndex, 'endPointerIndex')
            
            endPointer = nums[endPointerIndex]
            prevPointer = nums[endPointerIndex - 1]
            // console.log(endPointer, 'endPointer', endPointerIndex, 'index')

            let currentValueToCompare = null
            if(endPointer > maxValue) {
                maxValue = endPointer
                currentValueToCompare = lowestValue
            }
            if(endPointer < lowestValue) {
                lowestValue = endPointer
                currentValueToCompare = maxValue
            }
            // console.log(currentValueToCompare, endPointer, 'valuess')
            if(Math.abs(currentValueToCompare - endPointer) > limit) {
                if(nums[endPointerIndex + 1]) {
                    maxValue = nums[endPointerIndex]
                    lowestValue = nums[endPointerIndex]

                }
                if(auxArray.length > 1 && auxArray.length > longestSequence.length) {
                    // console.log('caiu aqui')
                    longestSequence = [...auxArray]
                }
                auxArray = []
                break
            } else {
                // console.log('caiu aqui2')

                auxArray.push(endPointer)
            }
            
        }
        // console.log(endPointerIndex, 'endPointerIndex final')
        // if(endPointerIndex == nums.length - 1) {
        //     console.log( 'caiuuuuuu')

        //     break
        // }
        if(!longestSequence.length) {
            longestSequence = [...auxArray]
        }

    }
    return longestSequence

}


console.log(longestSubarray([8, 2,4,7,6,12], 4))
console.log(longestSubarray([1,2,5], 4))
console.log(longestSubarray([10,1,2,4,7,2], 5))
// console.log(longestSubarray([1,2,5], 4))