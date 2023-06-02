class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    // insert at the first position of the Linked List.
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.count++;
    }
    // insert data in specific position of the list.
    insertAt(data, position) {
        if (position < 0 || position > this.count || position === undefined) {
            throw new Error("Invalid Position !!!");
        }

        if (position === 0) {
            this.insertFirst(data);
            return
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let i = 0;
        while (i < position) {
            previous = current;
            current = current.next;
            i++;
        }
        newNode.next = current;
        previous.next = newNode;
        this.count++;
    }
    // insert at the end of the list.
    insertEnd(data) {
        if (this.head === null) {
            this.insertFirst(data);
            return
        }
        const nodeToadd = new Node(data);
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = nodeToadd;
        this.count++;
    }
    // remove from the first position of the list.
    removeFirst() {
        if (this.head === null) {
            return "empty list !!!";
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.count--;
        return data;
    }
    // remove from at specific position of the list.
    removeAt(index) {
        if (this.head === null) {
            return "empty list !!!";
        }
        let data;
        if (index === 0) {
            return removeFirst();
        }
        let current = this.head;
        let previous;
        let i = 0;
        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        data = current.data;
        previous.next = current.next;
        this.count--;
        return data;
    }
    // romove from the end of the list.
    removeEnd() {
        if (this.head === null) {
            return "empty list !!!";
        }
        let removedData;
        if (this.head.next === null) {
            removedData = this.head.data;
            this.head = null;
            return removedData;
        }
        let current = this.head;
        let previous = null;
        while (current.next != null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.count--;
        return current.data;
    }

    // Method to print the list elements : traverse the given list in straight order.
    printStraight() {
        let current = this.head;
        let str = "";
        while (current !== null) {
            str += current.next ? `${current.data} -> ` : `${current.data}.`;
            current = current.next;
        }
        return str;
    }

    // Method to print the list elements : traverse the given list in reversed order.
    printReverse() {
        let current = this.head;
        if (current == null) {
            return "Empty List !!!";
        }
        let str = `${current.data}`;
        current = current.next;
        while (current !== null) {
            str = ` ${current.data} -> ` + str;
            current = current.next;
        }
        return str;
    }
    // Clear the Linked List.
    clearAll(){
        if(this.head === null){
            return "there is nothing to be deleted, the list is already Empty";
        }
        const userResponce = window.confirm("are you sure to clear the list ?");
        if(userResponce){
            this.head = null;
            this.count = 0;
            return "the list is emty know";
        }else{
            return " you Clicked Cancel and the execution is canceled !!!";
        }
    }

}

const listInstance = new LinkedList();