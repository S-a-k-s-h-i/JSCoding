/**
 * @param {number[]} nums
 * @return {number[]}
 */
//without using extra memory
var findDisappearedNumbers = function(nums) {
    let result=[];
    for(let i=0;i<nums.length;i++){
        let x= Math.abs(nums[i]);
        if(nums[x-1]>0){
            nums[x-1]=nums[x-1]*-1 //making the no negative
        }
    }
    for(let i=0;i<nums.length;i++){
        //Checking which no is non negative
        if(nums[i]>0){
          //x-1=i there must be x which does not exist inside array thats why whose -1 , we get index which is not negative
          //x=i+1
          result.push(i+1);
        }
    }
    return result;
};

//using an extra memory space
// var findDisappearedNumbers = function(nums) {
//     let n=nums.length,map=new Map(),result=[];
//     for(let i=1;i<=n;i++){
//         map.set(i,0)
//     }
//     for(let i=0;i<nums.length;i++){
//         let value=map.get(nums[i]);
//         value++;
//         map.set(nums[i],value) 
//     }
//     map.forEach((value,key) => {
//       if(value==0) result.push(key)
//     });
//     return result;
// };
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))