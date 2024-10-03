from typing import List


class Solution:
    def candy(self, ratings: List[int]) -> int:
        total_candies = len(ratings)
        previous = 0

        for i in range(1, len(ratings)):
            if ratings[i] > ratings[i - 1]:
                previous += 1
                total_candies += previous
            else:
                previous = 0

        previous = 0
        reset_previous = False
        for i in range(len(ratings) - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                if reset_previous:
                    previous = 0
                    reset_previous = False
                previous += 1
                total_candies += previous
            elif ratings[i] < ratings[i + 1] and previous > 0:
                reset_previous = True
                total_candies -= 1
                previous -= 1
            else:
                previous = 0
                
        return total_candies