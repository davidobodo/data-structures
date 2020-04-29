class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val)

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }
}

let dbll = new DoublyLinkedList();

dbll.push(5);
dbll.push(6);
dbll.push(1);
dbll.push(10);
console.log(dbll)