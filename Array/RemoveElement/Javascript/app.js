/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val)
            continue;

        nums[count] = nums[i];
        count++;
    }

    console.log(nums);
    console.log(count);
};

removeElement([3,2,2,3,2,2,2,2,3,2,2,2,2,3], 3);