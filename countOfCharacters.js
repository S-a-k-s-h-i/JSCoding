const str ='hello';
const frequencyMap = new Map();
for(const c of str){
    if(frequencyMap.has(c)){
        let count = frequencyMap.get(c)+1;
        frequencyMap.set(c,count)
    }else{
        frequencyMap.set(c,1);
    }
}
const frequencyArray= Array.from(frequencyMap);
frequencyArray.sort((a,b) => b[1]-a[1])
console.log(frequencyArray);

//Most occuring
console.log(frequencyArray[0][0]);