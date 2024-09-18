/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 1; i < nums.length; i++){
        prefix *= nums[i - 1]
        res[i] = prefix 
    }

    console.log("prefix", res)

    let postfix = 1;
    for (let i = nums.length - 2; i >= 0; i --){
        postfix *= nums[i + 1];
        res[i] *= postfix;
    }

    console.log("result", res)

    return res;
};

/**
 * input =   [1, 2, 3, 4]
 * prefix =  [1, 2, 6, 24]
 * postfix = [24, 24, 12, 4]
 * result =  [24, 12, 8, 6]
 */


console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))