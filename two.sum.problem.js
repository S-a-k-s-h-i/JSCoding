const arr = [3,4,2];
const goal = 6;
const result=[]

function twoSum(arr,goal){
   const map = new Map();
   for(let i=0;i<arr.length;i++){
    const remain=goal - arr[i];
    if(map.has(remain)){
        const index1= map.get(remain);
        const index2=i;
        return [index1,index2];
     }
     map.set(arr[i],i);
     console.log(map);
   }
   return -1;
}

console.log(twoSum(arr,goal));

