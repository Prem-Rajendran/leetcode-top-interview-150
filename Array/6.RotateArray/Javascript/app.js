/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k == 0 || nums.length == 1)
        return;

    k = k % nums.length;

    let reverse = (left, right) => {
        let n = (right - left + 1) / 2;
        for (let i = 0; i < n; i++){
            let temp = nums[left + i];
            nums[left + i] = nums[right - i];
            nums[right - i] = temp;
        }
    }

    reverse(0, nums.length - 1 - k);
    reverse(nums.length - k, nums.length - 1);
    reverse(0, nums.length - 1);
};

rotate([1,2,3,4,5,6,7], 3)
rotate([1,2,3,4,5,6,7], 10)
rotate([-1,-100,3,99], 2)