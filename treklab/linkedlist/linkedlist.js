"use strict";
exports.__esModule = true;
var linkedlistnode_1 = require("./linkedlistnode");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        // this.compare = new Comparator(comparatorFunction)
    }
    LinkedList.prototype.prepend = function (value) {
        var newNode = new linkedlistnode_1["default"](value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    return LinkedList;
}());
var david = new LinkedList();
console.log(david);
exports["default"] = LinkedList;
