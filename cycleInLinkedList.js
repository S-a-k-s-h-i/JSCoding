//Cycle Detection in a  Linked List

class LinkedList{
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}
const l1 = new LinkedList(1);
const l2 = new LinkedList(2);
const l3 = new LinkedList(3);
const l4 = new LinkedList(4);
const l5 = new LinkedList(5);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l2

function hasCycle(l1){
  const map = new Map();
  let current = l1;
  while(current){
    if(map.get(current.data)){
        return true
    }else{
        map.set(current.data,1);
    }
    current = current.next;
  }
  return false;
}

console.log('LInked list contains cycle-----',hasCycle(l1));