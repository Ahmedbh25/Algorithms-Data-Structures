const set1 = new Set(); // Using constructor
const set2 = new Set([95, 22, 20]); // Using constructor with initial values
const set3 = new Set([3, 7, 44, 44]); // Duplicates are automatically removed
const set4 = new Set(); // Using set literal notation


// Adding and Removing Elements:

const set = new Set();
set.add(1); // add new element to the set
set.add(2);
set.add("ahmed");
set.delete(2); // delete element from the set

// Checking Set Size and Membership:

console.log(set.size) // Output: 2
console.log(set.has("ahmed")) // Output: true
console.log(set.has(2)) // Output: false

/*
-Iterating over Set Elements:
Sets can be iterated using various techniques. You can use the forEach method to iterate over each
element, the for...of loop, or convert the set to an array using the Array.from or the spread operator.
*/

set.forEach(value => console.log(value));
for (const value of set) {
    console.log(value);
}
const array = Array.from(set);
console.log(array); // Output: [1, "ahmed"]

// Set Operations: Sets support various operations such as union, intersection, and difference...

const union = new Set([...set, ...set2]); // Set(5) {1, "ahmed", 95, 22, 20}
const intersection = new Set([...set].filter(value => set2.has(value))); //  Set(0) {}
const difference = new Set([...set].filter(value => !set2.has(value))); //  Set(2) {1, "ahmed"}

//==> Sets in JavaScript are useful when you need to store a collection of unique values and perform operations that require distinct elements. They provide an efficient way to handle sets of data and simplify many common tasks.

// creating Sets : 

function mySet() {
    // var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false.
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }

    // this method will return all the values in the set.
    this.values = function () {
        return collection;
    }

    // this method will add an element to the set.
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // this method will remove an element from a set.
    this.delete = function (element) {
        if (this.has(element)) {
            const indexELement = collection.indexOf(element);
            collection.splice(indexELement, 1);
            return true;
        }
        return false;
    }

    // this function will return the size of the collection.
    this.size = function(){
        return collection.length;
    }
    
    // this method will return the Union of two sets:
    this.union = function(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(item){
            unionSet.add(item);
        });
        secondSet.forEach(function(item){
            unionSet.add(item);
        })
        return unionSet;
    }
    // this will return the intersection of two sets as a new set.
    this.intersection = function(otherSet){
        let interSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)){
                interSet.add(e);
            }
        });
        return interSet;
    }

    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        let differSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(e =>{
            if(!otherSet.has(e)){
                differSet.add(e);
            }
        })
        return differSet;
    }

    // this method will test if a method is a subset of other other set.
    this.isSubset = function(otherSet){
        let firstSet = this.values();
        firstSet.every(function(value){
            return otherSet.has(value)
        });
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add("c")
setA.add("a")
setB.add("T")
setB.add("e")
setB.add("s")
setB.add("s")
console.log(setA.isSubset(setB));

// test more fuctions.....