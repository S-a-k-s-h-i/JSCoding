//TODO:  K’th Smallest/Largest Element in Unsorted Array
/*
Given an array and a number K where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.
Examples:  
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
Output: 7
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
Output: 10 
*/

//METHOD -1 : SORTING
//Time Complexity- O(NlogN) for sorting
function kthSmallestLinear(arr, k) {
  //Sort the given array return the element at position k-1
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
var arr = [7, 10, 4, 3, 20, 15];
console.log(
  "kth smallest element using Linear approach- ",
  kthSmallestLinear(arr, 3)
);

//METHOD -2- Min Heap
//Time Complexity - O(N) + klogN
//for inserting O(N) + for removing calling the removeMin k-1 times heapify-logN
class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }
  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }
  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }
  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyUp(this.getParentIndex(index));
    }
  }
  heapifyDown(index) {
    var smallerChildIndex = index;
    if (
      this.hasLeftChild(index) &&
      this.leftChild(index) < this.storage[smallerChildIndex]
    )
      smallerChildIndex = this.getLeftChildIndex(index);
    if (
      this.hasRightChild(index) &&
      this.rightChild(index) < this.storage[smallerChildIndex]
    )
      smallerChildIndex = this.getRightChildIndex(index);

    if (index !== smallerChildIndex) {
      this.swap(index, smallerChildIndex);
      this.heapifyDown(smallerChildIndex);
    }
  }
  insert(data) {
    this.storage[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }
  removeMin() {
    if (this.size == 0) return NaN;
    let min = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size -= 1;
    this.heapifyDown(0);
    return min;
  }
}

function kthSmallestElementMinHeap(arr, k) {
  const heap = new MinHeap();
  for (var i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }
  let cnt = k - 1;
  while (cnt) {
    heap.removeMin();
    cnt--;
  }
  return heap.storage[0];
}

console.log(
  "kth smallest element using Min Heap- ",
  kthSmallestElementMinHeap(arr, 3)
);
