//TODO: Find a peak element which is not smaller than its neighbours
/*
Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors. 
Note: For corner elements, we need to consider only one neighbor. 

Example:
Input: array[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.
*/

function peakElement(arr, len) {
  if (len == 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[len - 1] >= arr[len - 2]) return len - 1;
  for (var i = 1; i < len - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}

var arr = [5, 10, 20, 15];
console.log("Index of peak element ", peakElement(arr, arr.length));
