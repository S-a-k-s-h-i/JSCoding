//count vowels in a string
const vowels = ['a','e','i','o','u'];

//Iterative 
function countVowels(str){
    let count =0,index=0;
    while(index<str.length){
        if(vowels.includes(str[index])) count++;
        index++;
    }
    return count;
}

function recursiveCountVowels(count,str){
    if(str=="")return count;
   if(vowels.includes(str.toLowerCase()[str.length-1])){
      count=1;
   }else{
    count=0;
   }
   return count + recursiveCountVowels(count,str.substring(0,str.length-1));
}
console.log(countVowels('sakshi'))
console.log(recursiveCountVowels(0,'sakshi'));