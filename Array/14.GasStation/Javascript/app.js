/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0;
    let index = 0;
    let max_positive_total = 0;

    for (let i = 0; i < gas.length; i++){
        let diff = gas[i] - cost[i];
        max_positive_total += diff;
        total += diff;

        if (max_positive_total < 0){
            max_positive_total = 0;
            index += 1;
        }
    }

    return total >= 0 ? index : -1;
};

console.log("canCompleteCircuit: ", canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
console.log("canCompleteCircuit: ", canCompleteCircuit([2,3,4], [3,4,3]))
console.log("canCompleteCircuit: ", canCompleteCircuit([3,1,1], [1,2,2]))