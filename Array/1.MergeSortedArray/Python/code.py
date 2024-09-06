from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        pointer = len(nums1) - 1

        if n == 0:
            return
        
        while (n > 0):
            if m > 0 and nums1[m - 1] > nums2[n - 1]:
                nums1[pointer] = nums1[m - 1]
                m -= 1

            else:
                nums1[pointer] = nums2[n - 1]
                n -= 1

            pointer -= 1

        print(nums1)



sol = Solution()
sol.merge([0], 0, [9], 1)