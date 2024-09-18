import random


class RandomizedSet:

    def __init__(self):
        self.dict = {}
        self.arr = []
        

    def insert(self, val: int) -> bool:
        if self.dict.get(val) == None:
            self.arr.append(val)
            self.dict[val] = len(self.arr) - 1
            return True
        
        return False
        

    def remove(self, val: int) -> bool:
        if self.dict.get(val) == None:
            return False
        
        index = self.dict.get(val)
        last_entry = self.arr[len(self.arr) - 1]

        self.arr[index] = last_entry
        self.dict[last_entry] = index

        self.arr.pop()
        del self.dict[val]

        return True
        

    def getRandom(self) -> int:
        return random.choice (self.arr)
        


obj = RandomizedSet()

param_1 = obj.insert(1)
print("insert 1: ",param_1)

param_1 = obj.remove(2)
print("remove 2: ",param_1)

param_1 = obj.insert(2)
print("insert 2: ",param_1)

param_1 = obj.getRandom()
print("getRandom: ",param_1)

param_1 = obj.remove(1)
print("remove 1: ",param_1)

param_1 = obj.insert(2)
print("insert 2: ",param_1)

param_1 = obj.getRandom()
print("getRandom: ",param_1)