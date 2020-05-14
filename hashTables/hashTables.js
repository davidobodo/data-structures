function hash(string, max) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

function HashTable() {
    var storage = [];
    const storageLimit = 10;

    this.print = function () {
        console.log(storage)
    }

    this.add = function (key, value) {
        var index = hash(key, storageLimit)
        if (storage[index] === undefined) {
            storage[index] = [[key, value]]
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            } if (inserted === false) {
                storage[index].push([key, value])
            }
        }
    }

    this.remove = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            storage[index].shift();
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }

    this.lookup = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1]
                }
            }
        }
    }
}

const myHash = new HashTable();

myHash.add('name', 'obodo david')
myHash.add('age', 24)
myHash.add('occupation', 'Developer')
myHash.add('hobby', 'bass playing')
myHash.print()
myHash.add('age', 54)
myHash.remove('name')
myHash.print()