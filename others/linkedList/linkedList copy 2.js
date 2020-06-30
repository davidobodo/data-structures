class Node {
    constructor() {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    // constructor() {
    //     this.length = 0;
    //     this.head = null;

    // }
    length = 0;
    head = null;
    size() {
        return length;
    };
    head() {
        return head;
    };
    add(element) {
        var node = new Node(element);
        if (head === null) { //if no element exists
            head = node;
        } else {
            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };
    remove(element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }
}

var conga = new LinkedList();

conga.add(2)
conga.add(5)
console.log(conga.size())