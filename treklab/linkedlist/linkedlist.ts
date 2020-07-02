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
david.prepend(2)
david.prepend(5)
console.log(david, 'here')

export default LinkedList