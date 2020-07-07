"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var linkedlistnode_1 = __importDefault(require("./linkedlistnode"));
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.showLinkedList = [];
        // this.compare = new Comparator(comparatorFunction)
    }
    LinkedList.prototype.prepend = function (value) {
        var newNode = new linkedlistnode_1.default(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.showLinkedList.push(newNode);
        this.length += 1;
        return this;
    };
    LinkedList.prototype.append = function (value) {
        var newNode = new linkedlistnode_1.default(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.showLinkedList.push(newNode);
            this.length += 1;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.showLinkedList.push(newNode);
        this.length += 1;
        return this;
    };
    return LinkedList;
}());
var david = new LinkedList();
david.append(2);
// david.append(5)
// david.append(6)
// david.append(7)
// david.append(8)
console.log(david);
exports.default = LinkedList;
