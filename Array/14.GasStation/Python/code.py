from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:

        total = 0
        sum = 0
        position = 0

        for i in range(len(gas)):
            diff = gas[i] - cost[i]
            total += diff
            sum += diff

            if (sum < 0):
                sum = 0
                position = i + 1

        return -1 if total < 0 else position
    

s = Solution()
res = s.canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])
print(res)

res = s.canCompleteCircuit([2,3,4], [3,4,3])
print(res)