class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class hashTable {
    constructor(size) {
        this.htable = new Array(size);
        this.size = size;
    }

    // hash function to calculate index
    hash(key) {
        const hash = 17;
        for (let i = 0; i < this.size; i++) {
            hash = (13 * hash * key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
    // insert a key-value pair into a hash table
    insert(key, value) {
        const index = hash(key);
        const newNode = new Node(key, value);
        if (!this.htable[index]) {
            this.htable[index] = newNode;
            return
        }
        let current = this.htable[index];
        while (current.next !== null) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            current = current.next;
        }
        if (current.key === key) {
            current.value = value;
            return
        } else {
            current.next = newNode;
        }
    }
    get(key) {
        const index = hash(key);
        if (this.htable[index]) {
            let current = this.htable[index];
            while (current !== null) {
                if (current.key === key) {
                    return current.value;
                }
                current = current.next;
            }
            return null;
        }
    }

    remove(key) {
        const index = hash(key);
        let current = this.htable[index];
        let previous = null;
        while (current !== null) {
            if (current.key === key) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.htable[index] = current.next;
                }
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }
}