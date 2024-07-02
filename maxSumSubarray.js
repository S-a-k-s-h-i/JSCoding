//Maximum Subarray
//Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const array = [-2,1,-3,4,-1,2,1,-5,4];

//Regular for loop
// const maxSum = 0
// for(let i = 0;i<array.length;i++){
//     const sum = 0;
//     for(let j=i ;j<array.length;j++){

//     }
// }
// Time complexity O(n)^2

//Kadane's Algorithm
//cur=0
//max=0
// -2 curr= -2+0 = -2, max=0, curr = 0
// 1  curr = 0+1 = 1 , max=1, curr =1
// -3 curr = 1 + -3 = -2 , max =1, curr = 0
// 4 curr = 0+4 =4 , max =4, curr = 4
// -1 curr = 4 + -1 = 3 , max = 4, curr =3
// 2 curr = 3+2 = 5  , max= 5 , curr = 5
// 1 curr = 5+1 =6,  max=6 , curr = 6
// -5 curr = 6+ -5 = 1 , max = 6, curr = 1
// 4 curr = 1+4 = 5, max = 6 , curr =5
function findMaxSum(array){
    let curr = 0;
    let max = 0;
    console.log(curr,max);
    for(let i =0 ;i<array.length;i++){
        curr = curr + array[i];
        if(max<curr){
            max = curr;
        }
        if(curr<0){
            curr = 0    //because a negative sum can later also makes postive to negative
        }
    }
    return max;
}
console.log(findMaxSum(array));
