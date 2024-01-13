// function removeDuplicates(arr){
// const noDuplicateArray=[]
//    for(const elem of arr){   //-> n
//     if(!noDuplicateArray.includes(elem)) //->n
//       noDuplicateArray.push(elem);
//    }
//    return noDuplicateArray;
// }
//This has time complexity of O(n^2) due to the use of includes. So a better and efficient is
//to use SET to keep trak of unique elements
//- Set has constant time complexity of adding and checking the presence.

function removeDuplicates(arr){
   return Array.from(new Set(arr));
}
//O(n)

const arr = [1,2,3,4,3,6,7,4];
console.log('after removing duplicates------------',removeDuplicates(arr));
