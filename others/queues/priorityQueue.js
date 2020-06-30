function Queue() {
    this.queue = [];

    var queue = this.queue

    //-------------------------------------------------
    //add at end
    //-------------------------------------------------

    this.enqueue = function (val) {
        let insertPosition = queue.length;
        if (queue.length === 0) {
            return queue.push(val)
        } else {
            for (i = (queue.length - 1); i >= 0; i--) {
                if (val[1] > queue[i][1] && insertPosition !== 0) {
                    insertPosition = insertPosition - 1
                } else if (val[1] > queue[i][1] && insertPosition === 0) {
                    insertPosition = 0
                } else if (val[1] < queue[i][1] && insertPosition === 0) {
                    insertPosition = 1
                }
            }
            return queue.splice(insertPosition, 0, val)
        }

    }
}

var priority = new Queue();
priority.enqueue(['david', 5])
priority.enqueue(['obodo', 12])
priority.enqueue(['ada', 10])
priority.enqueue(['rose', 8])
priority.enqueue(['funmi', 18])
priority.enqueue(['dunni', 9])
priority.enqueue(['dunni', 1])
priority.enqueue(['dunni', 100])
priority.enqueue(['dunni', 8])
priority.enqueue(['ope', 8])
priority.enqueue(['rukky', 50])
console.log(priority)