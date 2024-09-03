/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer = nums1.length - 1;

    if (n === 0)
        return;

    while (n > 0){

        if (m > 0 && nums1[m - 1] > nums2[n - 1])
            nums1[pointer--] = nums1[--m];
        else
            nums1[pointer--] = nums2[--n];
    }
    
    console.log(nums1)
};

merge([0], 0, [1], 1)