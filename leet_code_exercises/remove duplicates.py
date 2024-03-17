class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        i = 1
        current = nums[0]
        counter = 0
        nums_len = len(nums)
        while i < len(nums):
            if nums[i] == current:
                nums.pop(i)
                counter += 1
                continue
            current = nums[i]
            i += 1
        return nums_len - counter


solution = Solution()  # Instantiate the Solution class
nums = [1,2,2,3]


print(solution.removeDuplicates(nums))  # Call the merge function
print(nums)