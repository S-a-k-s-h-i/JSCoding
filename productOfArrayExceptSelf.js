// Product of Array Except Self
// Given an array nums of n integers where n > 1, 
// return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

const array = [1,2,3,4];
//output: [24,12,8,6]

function productOfArrayExceptSelf(array){
   let maxProd = 1;
   const result = []
   array.forEach(element => {
     maxProd = maxProd * element;
   });

   array.forEach(number => {
    result.push(maxProd/number);
   })
   return result
}

console.log(productOfArrayExceptSelf(array));