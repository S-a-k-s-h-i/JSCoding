function moveZerosToEnd(arr){
    let nonZeoIndex=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==0){
           [arr[nonZeoIndex],arr[i]]=[arr[i],arr[nonZeoIndex]];
           nonZeoIndex++;
        }
    }
    return arr;
}
// we use nonZeroIndex to keep a track where a non zero element should be placed
// nonZeoIndex=0   i=0   0!==0   [0,8,0,4,2,0,1,0]
//                 i=1   8!=0    [8,0,0,4,2,0,1,0]
// nonZeoIndex=1   i=2   0!=0    [8,0,0,4,2,0,1,0]
//                 i=3   4!=0    [8,4,0,0,2,0,1,0]
// nonZeoIndex=2   i=4   2!=0    [8,4,2,0,0,0,1,0]
// nonZeoIndex=3   i=5   0!=0    [8,4,2,0,0,0,1,0]
//                 i=6   1!=0    [8,4,2,1,0,0,0,0]

let arr = [0,8,0,4,2,0,1,0];
console.log(moveZerosToEnd(arr));

//NOTE
//To sort in ascending arr.sort((a,b)=> a-b)
