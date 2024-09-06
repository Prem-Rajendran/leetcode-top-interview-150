from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:

        last_seen = None
        frequency = 0     
        for i in range(len(nums)):
            if (frequency == 0):
                last_seen = nums[i]

            frequency += 1 if nums[i] == last_seen else  -1
        return last_seen


s = Solution()
print(s.majorityElement([3,2,3]))
print(s.majorityElement([2,2,1,1,1,2,2]))