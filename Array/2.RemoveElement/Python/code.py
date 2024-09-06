from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = 0

        for i in range (len(nums)):
            if nums[i] == val:
                continue

            nums[count] = nums[i]
            count += 1

        print(f"count: {count} | nums: {nums}")

        return count
    


s = Solution()
s.removeElement([3,3,3,3,2,2,2,2,2,2,3,3,3,3,3], 3)