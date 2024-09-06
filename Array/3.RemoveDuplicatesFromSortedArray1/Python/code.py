from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count = 0

        for i in range(1, len(nums)):
            if nums[count] == nums[i]:
                continue

            count += 1
            nums[count] = nums[i]

        print(nums)

        return count

s = Solution()
print("Case1: [1,1,2]")
print(s.removeDuplicates([1,1,2]))

print("\nCase2: [0,0,1,1,1,2,2,3,3,4]")
print(s.removeDuplicates([0,0,1,1,1,2,2,3,3,4]))