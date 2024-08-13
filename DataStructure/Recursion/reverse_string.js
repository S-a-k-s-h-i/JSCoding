const str = 'sakshi';

function byIterative(str){
    return str.split('').reverse().join('');
}

function reverseString(str){
    let reverseString = "";
    let length = str.length-1;
    while(length>=0){
        reverseString+=str[length];
        length--;
    }
    return reverseString;
}

function reverseStringByRecursion(str){
    console.log(str)
    if(str==="") return str;
    return str[str.length-1]+reverseStringByRecursion(str.substring(0,str.length-1))
}

//console.log(reverseString(str));
console.log(reverseStringByRecursion(str));

