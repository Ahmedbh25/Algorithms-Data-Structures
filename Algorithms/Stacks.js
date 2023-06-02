class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    // push an element to the top of the stack.
    push(element) {
        if(!element && element !== false){
            console.log("cannot add an Empty element");
            return;
        }
        this.items[this.count] = element;
        this.count++;
    }
    // delete the last element in the stack
    pop() {
        if(this.count === 0){
            console.log("empty stack");
            return this.count;
        }
        const deleteItem = this.items[this.count - 1];
        this.items.pop();
        this.count--;
        return `we removed ${deleteItem} at position ${this.count + 1}`;
    }
    // retreive the value of the topmost element without removing it from the stack
    peek() {
        if(this.count === 0){
            console.log("empty stack");
            return this.count;
        }
        console.log(`${this.items[this.count - 1]} is the topmost element in the stack`);
        return this.items[count - 1];
    }
    // check if stack is Empty.
    isEmpty() {
        if (this.count === 0) {
            console.log('stack is empty');
            return true;
        }
        console.log('stack is not empty');
        return false;
    }
    // return the Size of the stack
    size() {
        console.log(`The Stack has ${this.count} elements`);
        return this.count
    }
    // print all items of the stack
    printItems() {
        if(this.count === 0){
            console.log("empty stack");
            return this.count;
        }
        let str = '';
        for (let i = this.count-1; i >= 0; i--) {
            str += `${this.items[i]} \n`;
        }
        console.log(str);
    }
}

const books = new Stack();
books.push("The Black Earth");
books.push("This is Fake book !!!!!");
books.pop();
books.push("Eloquent JavaScript");
books.push("JavaScript: The Good Parts");
books.push("Python Evolution");
books.printItems();





// *********************************   Palindrome & Declation function Stack   *********************************

// using STACK To define if string is palindrome or not:

let letters = []; // this is my stack.
let word= "RADAR";
let reverseWord = "";

// put letters of word onto stack.
for(let i=0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order.
for(let i=0; i < word.length; i++){
    reverseWord += letters.pop();
}

if(word === reverseWord) {
    console.log(`${word} is Palindrome`);
}else{
    console.log(`${word} is not Palindrome`);
}

// Real Exemple of STACK : 

//create a stack
let stackFunc = function(){ 
    this.count = 0;
    this.storage = {};
    // add value onto the end of the stack
    this.push = function(value){
        if(!value){
            return "undefined value !"
        }
        this.storage[this.count] = value;
        this.count++;
    }
    // remove and return the value at the end of the stack.
    this.pop = function(){
        if(this.count ===0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function(){
        return this.count;
    }
    // return the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var stackInstance = new stackFunc();

stackInstance.push(10);
stackInstance.push(15);
console.log(stackInstance.peek());
stackInstance.pop();
stackInstance.push(25);
stackInstance.push("AHMED BEN HAMOUDA");
console.log(stackInstance.size());
console.log(stackInstance.peek());
stackInstance.pop();
console.log(stackInstance.peek());
