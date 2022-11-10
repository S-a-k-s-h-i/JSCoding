//TODO: Reverse an array
//Write a program to reverse an array

function reverseArray(arr) {
  var temp;
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 4, 5])); //[5,4,2,1]
console.log(reverseArray([1, 2, 3])); //[3,2,1]
console.log(reverseArray([1])); //[1]
console.log(reverseArray([])); //[]
console.log(reverseArray(["a", "b", "c"])); //['c','b','a']
