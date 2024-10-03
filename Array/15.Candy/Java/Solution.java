public class Solution {
    public static void main(String[] args){
        
    }

    public int candy(int[] ratings) {
        int totalCandies = ratings.length;
        int previous = 0;

        for (int i = 1; i < ratings.length; i++){
            if (ratings[i1] > ratings[i - 1])
                totalCandies += ++previous;
            else
                previous = 0;
        }

        previous = 0;
        boolean reset = false;
        for (int i = ratings.length - 2; i >= 0; i--){
            if (ratings[i] > ratings[i + 1]){
                if (reset){
                    reset = false;
                    previous = 0;
                }

                totalCandies += ++previous;
            }
            else if (ratings[i] < ratings[i + 1] && previous > 0){
                totalCandies -= 1;
                previous -= 1;
                reset = true;
            }
            else{
                previous = 0;
            }
        }
        return totalCandies;
    }
}