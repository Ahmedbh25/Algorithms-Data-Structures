/*
- In JavaScript, objects are a fundamental data type used to represent and store collections of related
data and functionalities. They allow you to group variables (known as properties) and functions
(known as methods) together as a single entity. Objects are key-value pairs, where the keys are
strings (also called properties) and the values can be any valid JavaScript data type, including
other objects.
*/

// Creating object using Object literal notation.
const person = {
    name: "Ahmed",
    age: 25,
    profession: "Web Developer",
    greet: function () {
        console.log(`Hello, my name is ${this.name}. I'm a ${this.profession}!`);
    }
};

// Accessing Object Properties:
console.log(person.name); // Output: Ahmed
console.log(person['age']); // Output: 25

//Modifying Object Properties:
person.age = 29; // Modifying an existing property
person.city = "Kelibia"; // Adding a new property

//Object Methods:

person.greet(); // Output: Hello, my name is Ahmed I'm When Developer!
// this refers to the object person not the function that why we do person.name && this.profession 

// id we replace greet func by arrow func : () => console.log(`Hello, my name is ${this.name}. I'm a ${this.profession}.`);
person.greet(); // Output: Hello, my name is  I'm !

/*
!!! Very Important !!!

In JavaScript, arrow functions (() => {}) have a different behavior compared to regular functions
when it comes to the this keyword. Arrow functions do not have their own this context, and instead,
they inherit the this value from the surrounding scope.

In your code, since you're using an arrow function for the greet method, this refers to the
surrounding context, which is likely the global scope (e.g., window object in a browser environment).
As a result, this.name and this.profession will be undefined, leading to unexpected output.
To resolve this issue, you can use a regular function expression instead of an arrow function. 

*/

// Iterating Over Object Properties:

for (let key in person) {
    console.log(key + ": " + person[key]);
}

/*
output :
name: Ahmed
age: 25
profession: Web Developer
greet: () =>  console.log(`Hello My name is ${name} Im ${profession}`)
*/


// Object Destructuring: Destructuring allows you to extract object properties into individual variables.
const { name, age } = person;
console.log(name); // Output: Ahmed
console.log(age); // Output: 29

/* Cloning Objects: To create a copy of an object, you need to be careful, as simply assigning the object
to a new variable will create a reference rather than a new copy. You can use methods like Object.assign() or the spread operator ... to create a shallow copy.*/

const person2 = person /* be carefull this will create a refrence rather than an object, This means that both the original object and the new variable will refer
                        to the same underlying object in memory. Modifying the object through either the original variable or the new variable will affect both references.*/

person2.age = 45;
console.log(`age of person 2 = ${person2.age}`) // age of person 2 = 45
console.log(`age of person 2 ${person.age}`) // age of person = 45

// this is the best why to create a copy of an object.
const person3 = Object.assign({}, person);
const person4 = { ...person };

person3.age = 25; // this will not affect the value of person, change the only age of person3.
person3.name = "Ala Bhh";

// exercice : turn evry false value inside buttons to true. 

let buttons = {
    checkboxs: {
        star1: true,
        star2: false,
        star3: false,
        star4: false
    },
    btns: {
        btn1: false,
        btn2: true,
        btn3: true,
        btn4: false,
        btn5: true
    }
};

for (let key in buttons) {
    for (let nestedKey in buttons[key]) {
        if (buttons[key][nestedKey]) {
            buttons[key][nestedKey] = false;
        }
    }
}
