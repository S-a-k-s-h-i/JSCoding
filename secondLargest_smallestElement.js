// Find Second Smallest and Second Largest Element in an array
// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// Example 1:
// Input:
//  [1,2,4,7,7,5]
// Output:
//  Second Smallest : 2
// 	Second Largest : 5
// Explanation:
//  The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input:
//  [1]
// Output:
//  Second Smallest : -1
// 	Second Largest : -1
// Explanation:
//  Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

function secondLargestSecondSmallest(arr){
  if(arr.length<=1){
    return [-1,-1];
  }
  let small = Infinity;
  let second_small = Infinity;
  let large = -Infinity;
  let second_large= -Infinity;

  arr.forEach(element => {
    small = Math.min(small,element);
    large = Math.max(large,element)
  });
  arr.forEach(element => {
    if(element<second_small && element!==small)
      second_small = element;

    if(element>second_large && element!==large)
      second_large = element;
  })
  return [second_small,second_large];
}

const result = secondLargestSecondSmallest([1,2,4,7,7,5]);
console.log('Second Smallest : ',result[0]);
console.log('Second Largest : ',result[1]);