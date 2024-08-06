class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(data){
       this.queue.push(data);
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is empty';
        }
        return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length===0;
    }

    peek(){
        if(this.isEmpty()){
            return 'Queue is empty';
        }
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    clear(){
        this.queue = [];
    }

    printQueue(){
        let str = "";
        for(let elem of this.queue){
            str+=elem+"\n";
        }
        return str;
    }
}

const newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.dequeue();
console.log(newQueue.printQueue());