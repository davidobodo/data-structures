class LinkedlistNode {
    public value: number;
    public next: string;

    constructor(theValue: number, theNext = null) {
        this.value = theValue
        this.next = theNext
    }

    toString(callback: (val: number) => void) {
        return callback ? callback(this.value) : `${this.value}`
    }
}