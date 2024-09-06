/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    // Assuming that a majority element always exists

    let count = 0;
    let result = undefined;

    for (let i = 0; i < nums.length; i++){
        if (count === 0){
            count++;
            result = nums[i];
            continue;
        }
        
        count = result === nums[i] ? count + 1 : count - 1;
    }
    
    return result;

};