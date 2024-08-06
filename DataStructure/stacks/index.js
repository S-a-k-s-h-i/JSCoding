class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.stack.length==0
    }

    size(){
        return this.stack.length;
    }

    clear(){
        this.stack = [];
    }

    contain(element){
       return this.stack.includes(element);
    }

    reverse(){
        this.stack.reverse();
    }

    printStack(){
        let str = "";
        for(let i of this.stack){
            str+= i + '\n'
        }
        return str;
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.printStack());
