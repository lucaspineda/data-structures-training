# leet code 88
from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i = m - 1
        j = n - 1
        k = m + n - 1

        while j >= 0:
            if i >= 0 and nums1[i] > nums2[j]:
                nums1[k] = nums1[i]

                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1


solution = Solution()  # Instantiate the Solution class

nums1 = [1, 2, 3, 0,0,0]
m = 3  # Number of valid elements in nums1
nums2 = [2, 5, 6]
n = 3  # Number of elements in nums2

solution.merge(nums1, m, nums2, n)  # Call the merge function

print(nums1)  # Output: [1, 2, 2, 3, 5, 6]
