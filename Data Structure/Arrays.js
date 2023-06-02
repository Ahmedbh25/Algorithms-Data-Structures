// I - Arrays :

/*
-arrays :  an array is an ordred collection of elements, where each element can be of any data type,
including other arrays or objects.
- arrays in javscript are dynamic, meaning their size can be change dynamically by adding or removing elements.
-the elements in an array is accessed using zero-based indexing, where the first element is at index0,
the second is at index 1 and so on....
- arrays in javascript can be created using the array literal syntax [] or 'Array' constructor.
*/

// 1 - array basic manipulation :   
const ContrArray1 = Array(); // creating array Using Array constructor
const firstArray2 = Array("sqsqs", 5454); // creating array Using Array constructor.
const firstArray = []; // creating array Using an array literal.
let secondArray = [1, 2, 3]; // Initializing array with values Using an array literal.

secondArray[3] = 4 // add new element to secondArray at index 3 => secondArray become [1, 2, 3, 4].
secondArray[0] = 8 // secondArray become [8, 2, 3, 4].
secondArray[3] = 10 // secondArray become [8, 2, 3, 10].

// 2- most commonly used array methods in javascript:

let studentsB1 = [{name : "ahmed ben hamouda", id: 1}, {name :"aziz ben amor", id:2}, {name:"ala ben ghozzi", id:3}];
let studentsB2 = [{name:"Salim ben hsan", id:1}, {name:"Samy chouchen", id:2}, {name:"sami ben amor", id:3}];
let numbers = [4, 55, 56, 42, 77 ];

// ==> every function result are based only on the first initialisation in the top.

// a- concat(): Joins two or more arrays and returns a new array:

const contatinatedArrays = studentsB1.concat(studentsB2, numbers); // contatinatedArrays =  [ studentsB1 Elements , studentsB2 Elements, numbers Elements]


// b- filter(): Creates a new array with elements that pass a certain condition:

const evenArray = numbers.filter(number => !(number%2)) // evenArray = [4, 56, 42].
const oddArray = numbers.filter(number => number%2) // evenArray = [4, 56, 42].


// c- find(): Returns the first element in the array that satisfies a provided testing function:

const FirstElement = numbers.find( () => true) // return first element in numbers : FirstElement = 4
const studentToFind =  studentsB1.find(student => student.name === "ahmed ben hamouda") // finding student by name, even if we have two object element with same name it will return first one.


// d- forEach(): Executes a provided function once for each array element:

studentsB1.forEach(student => console.log(`name : ${student.name} | id : ${student.id}`));

// e- includes(): Checks if an array contains a specific element and returns a boolean value.

numbers.includes(4) // return true;
numbers.includes(3) // return false;


// => some(): some method same as includes, the only difference is that some can take callback function.

studentsB1.some(student => student.name === "ahmed ben hamouda") // return true.
studentsB1.some(student => student.name === "ahmed ben hamouda  ") // return false.
studentsB1.some(student => student.name === "   ahmed ben hamouda  ".trim()) // return true.


// f- indexOf(): Returns the first index at which a given element is found in the array.

studentsB1.findIndex(student => student.id === 4); // it will return 0 (the index of 4 inside studentsB1).
studentsB1.findIndex(student => student.id === 150) // will return -1 because 150 not founded in the array.


// g- join(): Joins all elements of an array into a string.

const arrayToString1 = numbers.join(", ") // arrayToString = "4, 55, 56, 42, 77"
const arrayToString12 = studentsB1.map(student => student.name).join(' | ') // arrayToString = "ahmed ben hamouda | aziz ben amor | ala ben ghozzi".


// h- map(): Creates a new array by applying a provided function to each element of the original array.

const mappedArray = studentsB1.map(student => student.id +1 ); // mappedArray = [2, 3, 4]

// i- pop(): Removes the last element from an array and returns that element.

numbers.pop() // remove last element (77) and return 77 ==> numbers = [4, 55, 56, 42]
studentsB1.pop() // remove and return  {name:"ala ben ghozzi", id:3}  studentsB1 = [{name : "ahmed ben hamouda", id: 1}, {name :"aziz ben amor", id:2}];

// j - push(): Adds one or more elements to the end of an array and returns the new length.

numbers.push("88") // add "88" to the last of numbers array and return 6 the new length.
numbers.push(11) // add 11 to the last of numbers array and return 7 the new length.

// k- reduce(): Applies a function to reduce the array to a single value.

const sumOfArrayElements = numbers.reduce((accumulator, currentValue ) => accumulator + currentValue , 0); // first currentValue start with 0 and every time add the currentValue to it  ==> the final result will be 234.


// l- reverse(): Reverses the order of the elements in an array.

numbers.reverse() //numbers will be [77, 42, 56, 55, 4].


// m- shift(): Removes the first element from an array and returns that element.

numbers.shift() // delete 4 (first element inside numbers) and return 4.


// n- slice(): Extracts a section of an array and returns a new array.

numbers.slice(1) // return [42, 56, 55, 4] => copy from index 1 to the end of numbers array.
numbers.slice(3) // return [55, 4] => copy from index 3 to the end of numbers array.
numbers.slice(0, 3) // retunr [77, 42, 56] copy from index 0 to index 3 (index 3 not included, top in index 2).


// o- sort(): Sorts the elements of an array in place.

array.sort() // number  = [4, 42, 55, 56, 77] => ascending sort by default.
array.sort((a, b) => b - a) // number  = [77, 56, 55, 42, 4] => descending sort.
array.sort((a, b) => a - b) // number  = [4, 42, 55, 56, 77] => ascending sort again.


// p- splice() : Changes the contents of an array by removing or replacing existing elements.

const removedElements =  numbers.splice(1,2) // removedElements = [4, 55] and numbers = [56, 42, 77].


// q- toString(): Returns a string representing the array and its elements.

numbers.toString() // return "4,55,56,42,77".


// r- unshift(): Adds one or more elements to the beginning of an array and returns the new length.

numbers.unshift(100, 101); // numbers =[100, 101, 4, 55, 56, 42, 77] and return 7 
