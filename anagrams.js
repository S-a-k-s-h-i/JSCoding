const str1 = 'earth';
const str2 = 'heart';

checkAnagrams = (str1,str2)=>{
  var a = str1.toLowerCase();
  var b = str2.toLowerCase();
  
  a= a.split('').sort().join('');
  b = b.split('').sort().join('');
  return a===b;
}
console.log(checkAnagrams(str1,str2));