// Find the Largest element in an array
// Problem Statement: Given an array, we have to find the largest element in the array.

// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array. 

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array.

function largestElement(arr){
    //SOL-1                 //Time complexity - O(nlogn)
    // arr.sort();
    // return arr[0];

    //SOL-2
    let max=arr[0]              //Time complexity - O(n)
    arr.forEach(element => {
        if(element>max) max= element;
    });
    return max;
}
console.log(largestElement([8,10,5,7,9]));