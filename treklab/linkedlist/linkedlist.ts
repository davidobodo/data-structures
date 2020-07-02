import LinkedListNode from './linkedlistnode'
import Comparator from '../comparator';

class LinkedList {
    public head: any
    public tail: any
    public compare: any

    constructor() {
        this.head = null;
        this.tail = null;
        // this.compare = new Comparator(comparatorFunction)
    }

    prepend(value: number | string) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value: number | string) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }
}

const david = new LinkedList()
console.log(david)
david.append(2)
console.log(david)
david.append(5)
console.log(david)
david.append(6)
console.log(david)

export default LinkedList