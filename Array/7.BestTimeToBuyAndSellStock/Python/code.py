from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if len(prices) <= 1:
            return 0

        max_profit = 0
        left = 0
        for right in range(1, len(prices)):
            profit = prices[right] - prices[left]
            if profit <= 0:
                left = right
            
            max_profit = max(max_profit, profit)

        return max_profit
    

s = Solution()
print(s.maxProfit([7,1,5,3,6,4]))
print(s.maxProfit([7,6,4,3,1]))