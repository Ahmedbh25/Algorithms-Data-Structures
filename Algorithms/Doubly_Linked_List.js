class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    // method to insert a node at the beginning of the the doubly list.
    insertFirst(data) {
        if(!data){
            return "Please, enter valid Data !!!";
        }
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.count++;
    }
    // method to insert a node at the end of the the doubly list.
    insertEnd(data) {
        if(!data && data!==0){
            return "Please, enter valid Data !!!";
        }
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count++;
    }
    // method to insert a node at a specific position of the the doubly list.
    insertAt(data, pos) {
        if(!data && data !== 0){
            return "Please, enter valid Data !!!"
        }
        if (pos === undefined) {
            return `position is ${pos}`;
        }
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        if (pos === 0) {
            this.insertFirst(data);
            return data;
        }
        let current = this.head;
        let i = 0;
        while (current !== null && i < pos) {
            current = current.next;
            i++;
        }
        if (current === null) {
            this.insertEnd(data);
            return data;
        }
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.count++;
        return data;
    }
    // method to remove a node from the beginning || end || middle of the the doubly list.
    removeFromList(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                break;
            }
            current = current.next;
        }
    }

    // Method to print the list elements : traverse the given list in straight order.
    printStraight() {
        let current = this.head;
        if (current === null) {
            console.log(`Empty List !!!`);
            return undefined;
        }
        let str="";
        while (current !== null) {
            str += current.next ? `${current.data} -> ` : ` ${current.data} .`;
            current = current.next;
        }
        return str;
    }

    // Method to print the list elements : traverse the given list in reversed order.
    printReverse(){
        let current = this.tail;
        if(current === null){
            console.log("Empty List !!!");
            return
        }
        let str = "";
        while(current !== null){
            str +=  current.prev ? `${current.data} -> ` : ` ${current.data} .`;
            current = current.prev;
        }
        return str;
    }
    // clear the doubly linked list
    clearAll(){
        if(this.head === null && this.tail === null){
            return "there is nothing to be deleted, the list is already Empty";
        }
        const userResponce = window.confirm("are you sure to clear the list ?");
        if(userResponce){
            this.head = null;
            this.tail = null;
            this.count = 0;
            return "the list is emty know";
        }else{
            return " you Clicked Cancel and the execution is canceled !!!";
        }
    }

}

const dll = new doublyLinkedList();
