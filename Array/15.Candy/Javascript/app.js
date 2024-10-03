/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let totalCandies = 0;
    let prevCandies = 0;

    for (let i = 1; i < ratings.length; i++){
        if (ratings[i] > ratings[i - 1])
            totalCandies += ++prevCandies;
        else 
            prevCandies = 0;
    }

    prevCandies = 0;
    let resetPreviousCandy = false;

    for (let i = ratings.length - 2; i >= 0; i -- ){
        if (ratings[i] > ratings[i + 1]){
            
            if (resetPreviousCandy){
                prevCandies = 0;
                resetPreviousCandy = false;
            }
            
            totalCandies += ++prevCandies;
        }
        else if (ratings[i] < ratings[i + 1] && prevCandies > 0){
            totalCandies -= 1;
            prevCandies -= 1;
            resetPreviousCandy = true;
        }
        else
            prevCandies = 0;
    }

    return totalCandies + ratings.length;
};

console.log("Candies: ", candy([1,0,2]))
console.log("Candies: ", candy([1,2,2]))
console.log("Candies: ", candy([1,2,3,7,1,5]))
console.log("Candies: ", candy([1,2,3,7,7,1,5]))
console.log("Candies: ", candy([1,2,3,7,7,7,7,1,5]))