//iterative
function fibonacci(n) {
  let n0 = 0,
    n1 = 1;
  let output = n0 + " " + n1;
  if (n == 1) {
    return n0;
  } else if (n == 2) {
    return output;
  }
  let itr = 2;
  while (itr < n) {
    temp = n0 + n1;
    output += " " + temp;
    n0 = n1;
    n1 = temp;
    itr++;
  }
  return output;
}
//fn= fn-1+fn-2
function recursiveFibonacci(n) {
  let n0 = 0,
    n1 = 1,
    itr = 2;
  let output = n0 + " " + n1;
  if (n == 1) {
    return n0;
  } else if (n == 2) {
    return output;
  }
  function helper(n0, n1, itr) {
    if (itr >= n) return output;
    temp = n0 + n1;
    output += " " + temp;
    n0 = n1;
    n1 = temp;
    itr++;
    return helper(n0, n1, itr);
  }
  return helper(n0, n1, itr);
}
console.log(fibonacci(8));
console.log(recursiveFibonacci(8));
