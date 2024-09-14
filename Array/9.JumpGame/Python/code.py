from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        if len(nums) is 1:
            return True
        
        if nums[0] >= len(nums) - 1:
            return True
        
        jump_index = len(nums) - 1
        for i in range(len(nums) - 2, -1, -1):
            if nums[i] >= jump_index - i:
                jump_index = i

        return jump_index == 0
    
s = Solution()
nums = [2,3,1,1,4]
print(f"Can Jump {nums}: {s.canJump(nums)}")

nums = [3,2,1,0,4]
print(f"Can Jump {nums}: {s.canJump(nums)}")

nums = [1,2,0,1]
print(f"Can Jump {nums}: {s.canJump(nums)}")