/**
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The window size.
 * @return {number[]} - An array containing the maximum element in each sliding window.
 */
var maxSlidingWindow = function(nums, k) {
    // const initialWindow = nums.slice(0,k)
    // totalMaxArr = []
    // for(let i = k - 1; i < nums.length; i++){
    //     const maxElement = Math.max(...initialWindow)
    //     totalMaxArr.push(maxElement)
    //     initialWindow.shift()
    //     initialWindow.push(nums[i + 1])
    // }
    // return totalMaxArr

        // Initialize an empty array to store the maximum values.
        let res = [];
        // Initialize a deque (double-ended queue) to store the indices of elements in the current window.
        let deque = [];
        
        // Iterate through the input array.
        for (let i = 0; i < nums.length; i++) {
            // Remove indices of elements from the deque that are smaller than or equal to the current element.
            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }
            // Remove indices of elements from the deque that are outside the current window.
            if (deque[0] <= i - k){
                deque.shift();
            } 
            // Add the current index to the deque.
            deque.push(i);
            // If the current index has reached the window size or greater, add the maximum element from the deque to the result array.
            if (i >= k - 1) res.push(nums[deque[0]]);
        }
        
        // Return the array containing the maximum element in each sliding window.
        return res;

};

console.log(maxSlidingWindow([7,2,4], 2))