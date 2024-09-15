//function to find k most frequent elements in list
const nums = [8,8,8,1,1,1,1,2,2,3,4,4,4,4,5,5,2,2,2,9,9]
const k=3
function kthMostFrequent(nums,k){
    const frequencyMap = new Map();
    nums.forEach(element => {
        if(frequencyMap.has(element)){
            let count= frequencyMap.get(element)+1;
            frequencyMap.set(element,count);
        }else{
            frequencyMap.set(element,1);
        }
    });
    const frequencyArray = Array.from(frequencyMap);
    frequencyArray.sort((a,b)=> b[1]-a[1]);
    const frequent = frequencyArray.slice(0,k).map(p => p[0]);
    return frequent;
}
console.log(kthMostFrequent(nums,k));