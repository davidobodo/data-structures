class Queue {
    constructor() {
        this.queue = [];
    }

    //add - enqueue
    enqueue(data) {
        return this.queue.push(data);
    }

    //remove - dequeue
    dequeue(data) {
        return this.queue.shift();
    }

    //peek
    peek() {
        console.log(this.queue[0]);
    }

    //isEmpty
    isEmpty() {
        return this.queue.length === 0;
    }


    //length
    size() {
        return this.queue.length;
    }

}

var firstqueue = new Queue();
firstqueue.enqueue(5)
firstqueue.enqueue(7)
firstqueue.enqueue(8)
console.log(firstqueue);
firstqueue.enqueue(1)
firstqueue.dequeue()
firstqueue.peek()
console.log(firstqueue);
console.log(firstqueue.isEmpty())
console.log(firstqueue.size())
var secondqueue = new Queue();
