//arr =[3,4,1,8,7]
//find me -> 1
//current index-> 0
//output -> 2
//if not found -> -1

function firstOccurence(search, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search) return i;
  }
  return -1;
}

// function recursiveFirstOccurence(search,index,arr){
//    if(index==arr.length) return -1
//    if(arr[index]== search){
//       return index;
//    }
//    return recursiveFirstOccurence(search,index+1,arr)
// }
function recursiveFirstOccurence(search, arr) {
  function helper(index) {
    if (index == arr.length) return -1;
    if (arr[index] == search) return index;
    return helper(index + 1);
  }
  return helper(0);
}

console.log(firstOccurence(1, [3, 4, 1, 8, 7]));
console.log(recursiveFirstOccurence(17, [3, 4, 1, 8, 7]));
