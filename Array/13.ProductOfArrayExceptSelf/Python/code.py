from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)

        for i in range(1, len(nums)):
            result[i] = result[i - 1] * nums[i - 1]

        postfix = 1
        for i in range(len(nums) - 2, -1, -1):
            postfix *= nums[i + 1]
            result[i] *= postfix

        return result

s = Solution()
s.productExceptSelf([1,2,3,4])
s.productExceptSelf([-1,1,0,-3,3])