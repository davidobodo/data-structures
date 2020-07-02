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

    prepend(value: number) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }
}

const david = new LinkedList()
console.log(david)

export default LinkedList