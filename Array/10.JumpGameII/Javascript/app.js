/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0;
    let left = 0, right = 0;

    while (right < nums.length - 1){
        let farthest = 0;
        for (let i = left; i <= right; i++){
            farthest = Math.max(farthest, i + nums[i]);
        }

        left = right + 1;
        right = farthest;
        steps ++;
    }

    return steps;
};

let nums = [2,3,1,1,4]
console.log("Max Jump "+ nums+": "+jump(nums));

nums = [2,3,0,1,4]
console.log("Max Jump "+ nums+": "+jump(nums));