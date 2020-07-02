class LinkedlistNode {
    public value: number | string;
    public next: unknown;

    constructor(theValue: number | string, theNext = null) {
        this.value = theValue
        this.next = theNext
    }

    toString(callback: (val: number | string) => void) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

export default LinkedlistNode