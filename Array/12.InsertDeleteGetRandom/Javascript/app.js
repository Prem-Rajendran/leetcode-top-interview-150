var RandomizedSet = function() {
    this.set = {}
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.set)
        return false;

    this.arr.push(val)
    this.set[val] = this.arr.length - 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (val in this.set){

        let index = this.set[val];
        let lastEntry = this.arr[this.arr.length - 1];
        this.arr[index] = lastEntry;
        this.set[lastEntry] = index;

        this.arr.pop();
        delete this.set[val]
        return true;
    }
    
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let random =  Math.floor(Math.random() * this.arr.length);
    return this.arr[random]
};


var obj = new RandomizedSet()
var param_1 = obj.insert(1)
console.log(param_1);

param_1 = obj.insert(1)
console.log(param_1);

param_1 = obj.insert(2)
console.log(param_1);

param_1 = obj.insert(3)
console.log(param_1);

param_1 = obj.insert(4)
console.log(param_1);

param_1 = obj.remove(2)
console.log(param_1)

param_1 = obj.remove(5)
console.log(param_1)

param_1 = obj.getRandom()
console.log(param_1)