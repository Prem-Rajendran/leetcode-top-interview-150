from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) <= 1:
            return 0
        
        current_profit = 0
        for i in range (len(prices) - 1):
            profit = prices[i+1] - prices[i]
            
            if (profit > 0):
                current_profit += profit

        return current_profit

s = Solution()
prices = [7,1,5,3,6,4]
print(f"MaxProfit for {prices} is {s.maxProfit(prices)}\n")

prices = [1,2,3,4,5]
print(f"MaxProfit for {prices} is {s.maxProfit(prices)}\n")

prices = [7,6,4,3,1]
print(f"MaxProfit for {prices} is {s.maxProfit(prices)}\n")