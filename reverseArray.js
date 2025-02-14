//write algorithm to reverse the same 
//do not create any new array
//[5,9,1,8,2,3]
//[3,2,8,1,9,5]
const array = [5,9,1,8,2,3]
function reverse(arr){
   let s=0,l=arr.length-1;
   while(s<l){
      //swap s and l
      let temp= arr[s];
      arr[s]=arr[l];
      arr[l]=temp;
      s++;
      l--;
   }
   return arr;
}

console.log(reverse(array))