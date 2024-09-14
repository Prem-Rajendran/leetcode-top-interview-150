/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length == 1 || nums[0] >= nums.length - 1)
        return true

    let jumpIndex = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i --){
        if (nums[i] >= jumpIndex - i)
            jumpIndex = i;
    }

    return jumpIndex === 0
};

nums = [2,3,1,1,4]
console.log("Can Jump "+ nums +" : " + canJump(nums))

nums = [3,2,1,0,4]
console.log("Can Jump "+ nums +" : " + canJump(nums))

nums = [1,2,0,1]
console.log("Can Jump "+ nums +" : " + canJump(nums))