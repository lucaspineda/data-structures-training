# ex 27

class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        i = 0
        invalid_numbers = 0
        while i < len(nums):
            if nums[i] == val:
                invalid_numbers += 1
                print('popp', i, nums)
                nums.pop(i)
                # nums.append('_')
                continue
            i += 1
        # return len(nums) - invalid_numbers
        return nums

solution = Solution()  # Instantiate the Solution class

nums1 = [1, 2, 3]
m = 3  # Number of valid elements in nums1
nums2 = [2, 5, 6]
n = 3  # Number of elements in nums2

print(solution.removeElement([3,2,2,3], 3))  # Call the merge function