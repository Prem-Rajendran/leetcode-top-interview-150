/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
    let temp = new Array(n + 1).fill(0)
    
    for (let i = 0; i < n; i++){
        if (citations[i] > n)
            temp[n] ++;
        else 
            temp[i] ++;
    }
    
    let total = 0;
    for (let i = citations.length; i >= 0; i--){
        total += temp[i];
        if (total >= i)
            return i;
    }

    return 0
};

console.log(hIndex([3,0,6,1,5]));