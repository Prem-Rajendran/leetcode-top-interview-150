from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)

        if k == 0 or length == 1:
            return
        
        if k > len(nums) - 1:
            k = k % len(nums)
        
        def reverse(i:int, j:int):
            limit = (j - i + 1) / 2
            for k in range(int(limit)):
                temp = nums[i + k]
                nums[i + k] = nums[j - k]
                nums[j - k] = temp

        reverse(0, length - k - 1)
        reverse(length - k, length - 1)
        reverse(0, length - 1)

s = Solution()
s.rotate([1,2,3,4,5,6,7], 3)
s.rotate([1,2,3,4,5,6,7], 10)
s.rotate([-1,-100,3,99], 2)