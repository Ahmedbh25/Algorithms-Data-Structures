
class Heap {
    constructor() {
        this.heap = [];
    }
    // swap two elements in the heap.
    swap(x, y) {
        [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
    }
    // get the parent index of a node.
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    // get the left child index of a node.
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    // get the right child index of a node.
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    // Heapify Up : Restores the heap property by moving an element up the heap.
    HeapifyUp(index) {
        const ParentIndex = this.getParentIndex(index);
        if (ParentIndex >= 0 && this.heap[index] > this.heap[ParentIndex]) {
            this.swap(index, ParentIndex)
            this.HeapifyUp(ParentIndex);
        };
    }
    // other version of Heapify Up without recursion :
    /*
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            index = parentIndex;
        } else {
            break;
        }
        }
    }

    */


    // Heapify Down : Restores the heap property by moving an element down the heap.
    HeapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            const smallerChildIndex = rightChildIndex < this.heap.length && rightChildIndex < leftChildIndex ? rightChildIndex : leftChildIndex;
            if (this.heap[index] > this.heap[smallerChildIndex]) {
                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }
    // peek the top (minimum, maximum) element of the heap. 
    peek() {
        if (!this.heap.length) {
            return null;
        }
        return this.heap[0];
    }
    // insert an element into a heap
    insert(value) {
        this.heap.push(value);
        this.HeapifyUp();
    }
    // remove an top element of a heap.  
    removeTop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.HeapifyDown();
        return top;
    }
    // build a heap from an array of values.
    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.HeapifyDown();
        }
    }
    // convert the heap to an array
    toArray() {
        return [...this.heap];
    }
    // get the size of heap
    size() {
        return this.heap.length;
    }
    // check if the heap is empty
    isEmpty(){
        return this.heap.length === 0 ;
    }
    // Clear the heap
    Clear(){
        this.heap = [];
    }
}