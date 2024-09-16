from typing import List


class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        temp = [0 for _ in range(n + 1)]

        for i in range(n):
            if citations[i] > n:
                temp[n] += 1
            else:
                temp[i] += 1

        total = 0
        for i in range(n, -1, -1):
            total += temp[i]
            if total >= i:
                return i
            
        return 0
    
s = Solution()
citations = [3,0,6,1,5]
print(f"H Index for {citations} is {s.hIndex(citations)}")

citations = [1,3,1]
print(f"H Index for {citations} is {s.hIndex(citations)}")