class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBegining = function (data) {
  const newNode = new Node(data, null, this.head);
  if (!this.head) {
    //linked list is empty
    this.tail = newNode;
  } else {
    //linked list already have some data
    this.head.prev = newNode;
  }
  this.head = newNode;
};

DoublyLinkedList.prototype.inserAtLast = function (data) {
  const newNode = new Node(data, this.tail, null);
  if (this.tail != null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.head == null) {
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.insertAfterGivenNode = function (nodeValue, data) {
  let current = this.head;
  while (current) {
    if (current.data == nodeValue) {
      const newNode = new Node(data);
      const nextNode = current.next;
      current.next = newNode;
      newNode.prev = current;
      if (nextNode !== null) {
        nextNode.prev = newNode;
        newNode.next = nextNode;
      } else {
        //last Node
        this.tail = newNode;
      }
    }
    current = current.next;
  }
};

DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(this.head == null){
        console.log('list is empty');
        return;
    }
    if(this.head == this.tail){ //only 1 node
        this.head = null;
        this.tail = null;
    }else{
        this.head = this.head.next;
        this.head.prev = null;
    }
}

DoublyLinkedList.prototype.deleteLastNode = function(){
    if(this.head == null){
        console.log('list is empty');
        return;
    }
    if(this.head == this.tail){ //only 1 node
        this.head = null;
        this.tail = null;
    }else{
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

DoublyLinkedList.prototype.reverse = function (){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
}

DoublyLinkedList.prototype.printList = function () {
  let current = this.head;
  while (current) {
    console.log(current);
    current = current.next;
  }
};

const list = new DoublyLinkedList();
// list.insertAtBegining(1);
// list.insertAtBegining(2);
// list.insertAtBegining(3);
// list.insertAtBegining(4);
// list.insertAtBegining(5);
list.inserAtLast(1);
list.inserAtLast(2);
list.inserAtLast(3);
// list.inserAtLast(4);
// list.inserAtLast(5);
// list.insertAfterGivenNode(5, 6);
// list.deleteFirstNode();
// list.deleteLastNode();
list.reverse();
list.printList();
console.log(list);
