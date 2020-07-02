class LinkedlistNode {
    public value: number;
    public next: unknown;

    constructor(theValue: number, theNext = null) {
        this.value = theValue
        this.next = theNext
    }

    toString(callback: (val: number) => void) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

export default LinkedlistNode