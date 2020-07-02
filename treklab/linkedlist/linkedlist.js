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
    return LinkedList;
}());
var david = new LinkedList();
david.prepend(2);
david.prepend(5);
console.log(david, 'here');
exports.default = LinkedList;
