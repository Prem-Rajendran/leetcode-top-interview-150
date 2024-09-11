/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1)
        return 0;

    let maximumProfit = 0;
    let left = 0;

    for (let right = 1; right < prices.length; right ++){
        let profit = prices[right] - prices[left]
        if (profit <= 0)
            left = right;
        else 
            maximumProfit = Math.max(maximumProfit, profit);
    }

    return maximumProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))