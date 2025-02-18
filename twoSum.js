/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        //As there can also be negative values in nums array
       if(map.get(nums[i])>=0 ||map.get(nums[i])<0){
        //if the number already present in array that means its sum can be equal to target
        return [map.get(nums[i]),i]
       }else{
        //setting key as the target-nums[i], which we will search further 
        //and value as index to be returned
         map.set(target-nums[i],i);
       }
    }
};

console.log(twoSum([2,7,11,15],9))