//TODO: Maximum and minimum of an array using minimum number of comparisons

//Method 1 : Linear
// function getMinMax(arr) {
//   var min = arr[0],
//     max = arr[0];

//   //if array contains 0 elements
//   if (arr.length == 0)
//     return "please add elements to array for finding minimum and maximum";

//   //if array contains only 1 element
//   if (arr.length == 1) return { min, max };

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }
//   return { min, max };
// }
//Total comparisons: 2*(n-1)+1

//Method 2: Comparing in pairs

function getMinMax(arr) {
  let min,
    max,
    i = 0;
  //if array contains 0 elements
  if (arr.length == 0)
    return "please add elements to array for finding minimum and maximum";

  if (arr.length % 2 == 0) {
    if (arr[i] > arr[i + 1]) {
      min = arr[i + 1];
      max = arr[i];
    } else {
      min = arr[i];
      max = arr[i + 1];
    }
    i = 2;
  } else {
    min = max = arr[0];
    i = 1;
  }
  while (i < arr.length - 1) {
    if (arr[i] < arr[i + 1]) {
      if (max < arr[i + 1]) max = arr[i + 1];
      if (min > arr[i]) min = arr[i];
    } else {
      if (max < arr[i]) max = arr[i];
      if (min > arr[i + 1]) min = arr[i + 1];
    }
    i += 2;
  }
  return { min, max };
}

console.log(getMinMax([3, 5, 4, 1, 9])); //{ min: 1, max: 9 }
console.log(getMinMax([22, 14, 8, 17, 35, 3])); //{ min: 3, max: 35 }
console.log(getMinMax([3])); //{ min: 3, max: 3 }
console.log(getMinMax([]));
