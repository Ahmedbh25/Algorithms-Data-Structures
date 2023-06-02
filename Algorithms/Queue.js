class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    // push item to the end of the Queue.
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }
    // remove The first item in the queue.
    pop() {
        if (this.count === 0) {
            return undefined;
        }
        const deletedItem = this.items[0];
        this.items.shift();
        this.count--;
        return deletedItem;
    }
    // retreive element in the front of the queue.
    peek() {
        if (this.count === 0) {
            return undefined;
        }
        return this.items[0]
    }
    // check if the queue is empty.
    isEmpty() {
        if (this.count === 0) return true;
        return false;
    }
    // size of the queue.
    size() {
        return this.count;
    }
    // print out all queue elements.
    print() {
        let str = "";
        for (let i = 0; i < this.count; i++) {
            str += `${this.items[i]} \n`;
        }
        return str;
    }
}

const carsQueue = new Queue();

carsQueue.isEmpty();
carsQueue.push("Mr Smith's Car"); 
carsQueue.push("Mr Ahmed's Car");
carsQueue.peek();
carsQueue.push("Mr John's Car");
carsQueue.push("Mrs Lana's Car");
carsQueue.size();
carsQueue.pop();
carsQueue.size();
carsQueue.print();
carsQueue.isEmpty();
