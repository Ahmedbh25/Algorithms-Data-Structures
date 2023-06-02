// I - Strings :

/*
- String is a sequence of characters, such as letters, numbers, symbols, or spaces, enclosed in single quotes (') or double quotes (").
- Strings are immutable, witch means they cannot be changed once created. any operator that apears to modify
  a string actually creates a new string.
- String have nuild-in properties and objects for various operations and manipulations.
*/

// 1 - string basic manipulation :   

let name1 = "ahmed ben hamouda";
let name2 = "Sami Ben Amor";
const name2Modified = "Sami Ben Amor Ben"  
let description = `hello " ${name1} " and " ${name2} "  best two students of the year`;

name1[0] // get caractere of name1 at index 0 => will return "a".
name1[5] // get caractere of name1 at index 5 => will return " " (space).
name1[0] = "s" // name1 stay the same because strings are immutable, which means that once a string is created, its individual characters cannot be changed.

/* 2- most commonly used String methods in javascript:

==> every function result are based only on the first initialisation in the top.*/


// charAt(): Returns the character at a specified index in a string.

name1.charAt() // by default return the character at index 0  => "a".
name1.charAt(3) // return character at index 3 => "a".


// charCodeAt(): Returns the Unicode value of the character at a specified index in a string.
name1.charCodeAt() // return 97 witch is the Unicode of "e" character.
name1.charCodeAt(3) // return 101 witch is the Unicode of "e" character.

// concat(): Joins two or more strings and returns a new concatenated string.

const ConcatinatedStrings = name2.concat(" ", name1, " ", xx); // ConcatinatedStrings = "Sami Ben Amor ahmed ben hamouda 78798"

// endsWith(): Checks if a string ends with a specified substring and returns a boolean value.

name1.endsWith("ouda") // return true because "ahmed ben hamouda" ends with "ouda".

// indexOf(): Returns the index of the first occurrence of a specified value in a string.

name2.indexOf("Ben") // it will return 5.

// lastIndexOf(): Returns the index of the last occurrence of a specified value in a string.

name2Modified.lastIndexOf("Ben") // it will return 14.

// length: Returns the length of a string.

name2Modified.length // will return 17 (17 characters).

// match(): Searches a string for a match against a regular expression and returns an array of matches.

const matchesArray = name1.match(/a/g) // matchesArray = ["a", "a", "a"].

// replace(): Searches a string for a specified value or regular expression and replaces it with a new value.

const replaceArray = name1.replace(/a/g, "_") // replaceArray = "_hmed ben h_moud_"

// search(): Searches a string for a specified value or regular expression and returns the index of the match.

const indexOFMatch = name1.search(/ed/g); // indexOFMatch = 3 (index of "ed" in "ahmed ben hamouda" ).


// slice(): Extracts a section of a string and returns a new string.

name1.slice(0) // will return "ahmed ben hamouda".
name1.slice(5) // will return  " ben hamouda".
name1.slice(1,5) // will return "hmed".

// split(): Splits a string into an array of substrings based on a specified separator.

name1.split("") // return ["a", "h", "m", "e", "d", " ", "b", "e", "n", " ", "h", "a", "m", "o", "u", "d", "a"].
name1.split("a") // ["", "hmed ben h", "moud", ""].

// startsWith(): Checks if a string starts with a specified substring and returns a boolean value.

name2.startsWith("sami") // return false.
name2.startsWith("Sami") // return true.

// substr(): Returns a specified number of characters from a string, starting at a specified index.

name2.substr() // return "Sami Ben Amor".
name2.substr(1,5) // return "ami B".
name2.substr(5)  // return "Ben Amor".


// substring(): Returns a subset of a string between two specified indices.

name2.substring() // return "Sami Ben Amor".
name2.substring(1,5) // return "ami ".
name2.substring(5) // return "Ben Amor".

// toLocaleLowerCase(): Converts a string to lowercase according to the host's locale.

name2.toLocaleLowerCase() // name2 = "sami ben amor".

// toLocaleUpperCase(): Converts a string to uppercase according to the host's locale.

name2.toLocaleUpperCase() // name2 = "SAMI BEN AMOR".

// toLowerCase(): Converts a string to lowercase.

name2.toLowerCase() // name2 = "sami ben amor"

// toUpperCase(): Converts a string to uppercase.

name2.toUpperCase() // name2 = "SAMI BEN AMOR".

// trim(): Removes whitespace from both ends of a string.

let stringWithSpaces = "   ahmed ben       hamouda      ";
const newString = stringWithSpaces.trim() // newString = "ahmed ben       hamouda" && stringWithSpaces not changed still the same.

