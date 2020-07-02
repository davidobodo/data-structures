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
        // this.compare = new Comparator(comparatorFunction)
    }
    LinkedList.prototype.prepend = function (value) {
        var newNode = new linkedlistnode_1.default(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    LinkedList.prototype.append = function (value) {
        var newNode = new linkedlistnode_1.default(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    };
    return LinkedList;
}());
var david = new LinkedList();
console.log(david);
david.append(2);
console.log(david);
david.append(5);
console.log(david);
david.append(6);
console.log(david);
exports.default = LinkedList;
