class Comparator {
    public compare: (a: string | number, b: string | number) => boolean | number;

    constructor(compareFunction: (a: number, b: number) => boolean) {
        this.compare = compareFunction || Comparator.defaultCompareFunction
    }

    static defaultCompareFunction(a: string | number, b: string | number) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    equal(a: number, b: number) {
        return this.compare(a, b) === 0
    }

    lessThan(a: number, b: number) {
        return this.compare(a, b) < 0
    }

    greaterThan(a: number, b: number) {
        return this.compare(a, b) > 0
    }

    lessThanOrEqual(a: number, b: number) {
        return this.lessThan(a, b) || this.equal(a, b)
    }

    greaterThanOrEqual(a: number, b: number) {
        return this.greaterThan(a, b) || this.equal(a, b)
    }

    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a)
    }
}