from typing import List


class Solution:
    def jump(self, nums: List[int]) -> int:
        res = 0
        left = 0
        right = 0

        while right < len(nums) - 1:
            farthest = 0
            for i in range(left, right + 1):
                farthest = max(farthest, i + nums[i])

            left = right + 1
            right = farthest
            res +=1

        return res 
    

s = Solution()
nums = [2,3,1,1,4]
print(f"Max Jump {nums}: {s.jump(nums)}")

nums = [2,3,0,1,4]
print(f"Max Jump {nums}: {s.jump(nums)}")