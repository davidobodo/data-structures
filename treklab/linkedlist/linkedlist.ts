import LinkedListNode from './linkedlistnode'
import Comparator from '../comparator';

class LinkedList {
    public head: any
    public tail: any
    public length: number
    public showLinkedList: Array<LinkedListNode>
    public compare: any

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.showLinkedList = []
        // this.compare = new Comparator(comparatorFunction)
    }

    prepend(value: number | string) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        this.showLinkedList.push(newNode)
        this.length += 1;
        return this;
    }

    append(value: number | string) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.showLinkedList.push(newNode)
            this.length += 1;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.showLinkedList.push(newNode)
        this.length += 1;
        return this;
    }

    delete(delValue: number | string) {
        let currentNode;
        let previousNode;

        currentNode = this.head;
        previousNode = this.head;

        //deleting head node;
        if (currentNode.value === delValue) {
            this.head = currentNode.next;
            this.length -= 1;
            this.showLinkedList.shift();
            return;
        }

    }


}

const david = new LinkedList()
david.append(2)
david.append(5)
david.append(6)
david.append(7)
david.append(8)
console.log(david)
david.delete(2)
console.log(david)

export default LinkedList