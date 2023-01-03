//using count method
function sortArray(arr) {
  var i,
    count0 = 0,
    count1 = 0,
    count2 = 0;
  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 0:
        count0 += 1;
        break;
      case 1:
        count1 += 1;
        break;
      case 2:
        count2 += 1;
    }
  }
  i = 0;
  while (count0) {
    arr[i++] = 0;
    count0 -= 1;
  }
  while (count1) {
    arr[i++] = 1;
    count1 -= 1;
  }
  while (count2) {
    arr[i++] = 2;
    count2 -= 1;
  }
  return arr;
}

//using pointer method
function sort012(arr) {
  let temp,
    low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      (low += 1), (mid += 1);
    } else if (arr[mid] == 1) {
      mid += 1;
    } else {
      temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high -= 1;
    }
  }
  return arr;
}

console.log("using count method: ", sortArray([0, 1, 2, 0, 1, 2]));
console.log("using pointer method: ", sort012([0, 1, 2, 0, 1, 2]));
