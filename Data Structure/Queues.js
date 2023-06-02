/*
=> (Queues) in english and (files) in frensh.

-In JavaScript, a queue is a data structure that follows the First-In-First-Out (FIFO) principle.
It represents a collection of elements where new elements are added to the back (end) of the queue,
and existing elements are removed from the front (start) of the queue. Queues are commonly used for
managing tasks, events, or asynchronous operations.

=> You can think of a queue as a line of people at a grocery store. The first one in the line is the
first one to be served. 

*/

// To implement a queue in JavaScript, you can use an array or create a custom class :

// Create an empty queue.
const queue = [];

// Enqueue an element to the back of the queue.
queue.push("Me The First One");
queue.push("Me The Second One");
queue.push("Me The Third One");

// Dequeue the element from the front of the queue
const firstElement = queue.shift();
console.log(firstElement); // Output: "Me The First One"

// The queue now contains "Me The Second One" and "Me The Third One"
console.log(queue); // Output: ["Me The Second One", "Me The Third One"]


//Alternatively, you can create a custom class to represent a queue in JavaScript:

function Queue() {
    collection = [];
    this.print = function () {
        console.log(collection);
    };
    this.enqueue = function (element) {
        collection.push(element);
    };
    this.dequeue = function () {
        return collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

function PriorityQueue() {
    var collection = [];
    this.printCollection = function () {
        (console.log(collection));
    };
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function () {
        var value = collection.shift();
        return value[0];
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();



