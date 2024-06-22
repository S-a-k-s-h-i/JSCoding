// function mostFrequent(arr,n){
//     arr.sort();
//     let count=1, maxCount=1;
//     for(let i=1;i<n;i++){
//         if(arr[i-1]==arr[i])
//           count++;
//         else 
//            count=1
        
//         if(count>maxCount){
//           maxCount=count;
//           res= arr[i-1]
//         }
//     }
//     return res;
// }
//Time complexity O(nlogn)

function mostFrequent(arr,n){
    const map = new Map();
    let maxCount = 0
    for (let i=0;i<n;i++){
        let currentCount = (map.get(arr[i]) || 0)+1;
        map.set(arr[i],currentCount);

        if(currentCount>maxCount){
            maxCount = currentCount;
            res=arr[i];
        }
    }
    return res;
}
//Time complexity - O(n)

let arr = [40,50,30,40,50,30,30];
let n = arr.length;
const result=mostFrequent(arr,n);
console.log('result:',result);