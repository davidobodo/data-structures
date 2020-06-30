function Queue() {
    this.queue = [];

    var queue = this.queue

    //-------------------------------------------------
    //add at end
    //-------------------------------------------------

    this.enqueue = function (val) {
        queue.push(val)
        queue.sort((a, b) => {
            return b[1] - a[1]
        })
        return queue
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