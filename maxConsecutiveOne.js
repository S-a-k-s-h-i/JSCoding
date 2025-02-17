/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count1=0,maxCons1=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count1++;
        }else{
            maxCons1=Math.max(maxCons1,count1);
            count1=0
        }
    }
    //this condition added for case where the last digit is 1 so then
    //we have not come under else condition and not yet stored the maxCons1
    maxCons1=Math.max(maxCons1,count1);
    return maxCons1;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))