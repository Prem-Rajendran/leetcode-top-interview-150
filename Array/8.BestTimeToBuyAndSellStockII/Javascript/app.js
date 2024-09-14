/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1)
        return 0;
    
    let max_profit = 0;
    for (let i = 0; i < prices.length - 1; i++){
        let profit = prices[i+1] - prices[i];
        if (profit > 0)
            max_profit += profit;
    }

    return max_profit
};


let prices = [7, 1, 5, 3, 6, 4];
console.log("MaxProfit for " + prices + " is " + maxProfit(prices));

prices = [1, 2, 3, 4, 5];
console.log("MaxProfit for " + prices + " is " + maxProfit(prices));

prices = [7, 6, 4, 3, 1];
console.log("MaxProfit for " + prices + " is " + maxProfit(prices));