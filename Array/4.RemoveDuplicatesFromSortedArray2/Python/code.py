from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        if not nums:
            return []
        
        left = 0

        for right in range(len(nums)):
            if right + 2 >= len(nums) or nums[right] != nums[right + 2]:
                nums[left] = nums[right]
                left += 1

        return left

s = Solution()
print(s.removeDuplicates([1,1,1,2,2,3]))
print(s.removeDuplicates([0,0,1,1,1,1,2,3,3]))