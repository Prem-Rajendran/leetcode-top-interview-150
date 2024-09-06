/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0)
        return []

    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(right + 2 >= nums.length || nums[right] !== nums[right+2]){
            nums[left] = nums[right];
            left += 1
        }
    }
    
    return left;
};


console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))