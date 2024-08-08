class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

LinkedList.prototype.insertAtBegining = function (data) {
  const newNode = new Node(data);
  if (this.size == 0) {
    this.head = newNode;
    this.size++;
  } else {
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (this.size == 0) {
    this.head = newNode;
    this.size++;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
};

LinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
  if (!prevNode) {
    console.log("Prev node cannot be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
  this.size++;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (this.size == 0) {
    console.log("List is empty");
    return;
  } else if (this.size == 1) {
    this.head = null;
  } else {
    this.head = this.head.next;
  }
  this.size--;
};

LinkedList.prototype.deleteLastNode = function () {
  if (this.size == 0) {
    console.log("List is empty");
    return;
  } else {
    let prev = this.head;
    let current = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  this.size--;
};

LinkedList.prototype.deleteKey = function (key) {
  if (this.size == 0) {
    console.log("List is empty");
    return;
  } else {
    current = this.head;
    if (current.data == key) {
      this.head = current.next;
      this.size--;
      return;
    }
    while (current.next) {
      if (current.next.data == key) {
        current.next = current.next.next ? current.next.next : null;
        this.size--;
        return;
      } 
      current = current.next;
    }
    console.log('No node found with this key')
  }
};

LinkedList.prototype.search = function(key){
    if (this.size == 0) {
        console.log("List is empty");
        return;
      }
     let current = this.head;
     while(current){
       if(current.data== key) {
          return true;
       }
       current=current.next;
     }
     return false;
}

// LinkedList.prototype.reverse = function (){
//     const newList = new LinkedList();
//     current= this.head;
//     while(current){
//         newList.insertAtBegining(current.data);
//         current= current.next;
//     }
//     newList.print();
// }

// LinkedList.prototype.reverse = function (){
//     let iteration = this.size-1;
//     while(iteration){
//         let current= this.head;
//         this.insertAtEnd(current.data);
//         this.head = current.next;
//         iteration--;
//     }
// }

LinkedList.prototype.reverse = function(){
    let current = this.head;
    let prev = null, next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}

LinkedList.prototype.print = function () {
  let current = this.head;
  while (current !== null) {
    console.log(current);
    current = current.next;
  }
};

const list = new LinkedList();
list.insertAtBegining(1);
// list.print();
list.insertAtBegining(2);
list.insertAtBegining(3);
list.insertAtEnd(4);
list.insertAtEnd(5);
// list.deleteFirstNode();
// list.deleteLastNode();
// list.deleteKey(5);
// console.log(list.search(12));
list.reverse();
list.print();
