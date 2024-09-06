/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0)
        return 0;

    let unique_positions = 0;

    for (let i = 1; i < nums.length; i++){
        if (nums[unique_positions] === nums[i])
            continue;

        unique_positions++;
        nums[unique_positions] = nums[i];
    }

    return unique_positions + 1;
};

console.log("Case1: [1,1,2]")
console.log(removeDuplicates([1,1,2]))

console.log("Case2: [0,0,1,1,1,2,2,3,3,4]")
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))