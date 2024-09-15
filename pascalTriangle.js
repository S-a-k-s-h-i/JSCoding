// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.
// Formula 
// r-1Cc-1.  r-1 as n and c-1 as r:
// nCr = n! / (r! * (n-r)!)
//If we g with solving the factorial Time complexity - O(n)+O(r)O(n-r)
// We can optimize this calculation by the following observation. 
// Assume, given r = 7, c = 4. 
// Now, n = r-1 = 7-1 = 6 and r = c-1 = 4-1 = 3
// Let’s calculate 6C3 = 6! / (3! *(6-3)!) = (6*5*4*3*2*1) / ((3*2*1)*(3*2*1))
// This will boil down to (6*5*4) / (3*2*1)
// So, nCr = (n*(n-1)*(n-2)*.....*(n-r+1)) / (r*(r-1)*(r-2)*....1)
// (n / 1)*((n-1) / 2)*.....*((n-r+1) / r).
// But while implementing this into code we will take the denominator in the forward direction like: 
function nCr(n,r){
     let response=1;
     for(let i=0;i<r;i++){
        response = response * (n-i);
        response = response/(i+1);
     }
     return response 
}
let r=7,c=4;
const element = nCr(r-1,c-1);
console.log(element);
//Time Complexity - O(c) as running loop r times(c-1)
//Space Complexity - O(1)

//Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.
// n-th row of the triangle has exactly n elements
//It will depend on the no of elements in a row, will loop that much time
function printNthRow(r){
    let list = [];
    for(c=1;c<=r;c++){
        const element = nCr(r-1,c-1);
        list.push(element);
    }
    return list;
}
console.log(printNthRow(6));
//Time Complexity - O(nc) as running loop r times(c-1)
//Space Complexity - O(1)

//Optimize
// N=6
//         1        2           3             4
//  1,     5,      10,         10,            5,                1 
//        5/1      5/1*4/2    5/1*4/2*3/3    5/1*4/2*3/3*2/4    
// Formula
// ans*(row-col)/col
function printNthRowOp(n){
     let list = [],ans=1;
     list.push(1);
     for(let i=1;i<n;i++){
        ans = ans*(n-i);
        ans=ans/i;
        list.push(ans);
     }
     return list;
}
console.log(printNthRowOp(6));
//Time Complexity - O(n) 
//Space Complexity - O(1)

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.
function printPascal(n){
    let response = [];
    for(let row=1;row<=n;row++){
        let tempList = [];
        for(let col=1;col<=row;col++){
            const element= nCr(row-1,col-1);
            tempList.push(element);
        }
        response.push(tempList);
    }
    return response;
}
console.log(printPascal(6));
//Time Complexity - O(n) * O(n)*O(n)*O(n)=0(n3)

//Optimize
//WE will call the optimized function to print nth row
function printPascalOp(n){
    let list = [];
  for(let i=1;i<=n;i++){
      list.push(printNthRowOp(i));
  }
  return list;
}
console.log(printPascalOp(6));
//Time Complexity - O(n) * O(n)*O(n)=0(n2)