//TODO: Sort The Array
/*
Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: {1, 2, 3, 5}
Explanation: After sorting array will 
be like {1, 2, 3, 5}.
*/

function sortArray(arr, len) {
  var tmp,
    done = false;
  while (!done) {
    done = true;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        done = false;
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }
  return arr;
}
var arr = [1, 5, 3, 2];
console.log("sorted array - ", sortArray(arr, arr.length));
