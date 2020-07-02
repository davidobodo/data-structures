"use strict";
exports.__esModule = true;
var LinkedlistNode = /** @class */ (function () {
    function LinkedlistNode(theValue, theNext) {
        if (theNext === void 0) { theNext = null; }
        this.value = theValue;
        this.next = theNext;
    }
    LinkedlistNode.prototype.toString = function (callback) {
        return callback ? callback(this.value) : "" + this.value;
    };
    return LinkedlistNode;
}());
exports["default"] = LinkedlistNode;
