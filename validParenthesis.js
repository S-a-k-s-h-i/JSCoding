// Valid Parentheses
// Given a string containing just the characters
//'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function isValid(s){
    let obj = {
     '(':')',
     '{':'}',
     '[':']'
    }
    let stack = []
    for(let i =0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            stack.push(s[i])
        }else if(s[i]!==obj[stack.pop()]){
          return false;
        }
    }
    return stack.length === 0;
}
//let str = '()[]{}'
let str = '([])'
console.log('valid parenthesis------',isValid(str));