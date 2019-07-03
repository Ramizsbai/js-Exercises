//**Strings Exercises**

//*These exercises are aimed at making you more familiar with strings, namely string methods as well as string interpolation. 

//*Print your results of each exercise to the console. Use the terminal to view your results. 

//*1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

console.log(`--------1---------`);
let walk = "I can walk in the park all day";
console.log(walk.length);
console.log(walk.slice(18,22));

//*2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

console.log(`--------2---------`);
let java = "JavaScript";
console.log(java.slice(3,6));
//*3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

console.log(`--------3---------`);
let Upper = "Hello world";
console.log(Upper.toUpperCase());

//*4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

console.log(`--------4---------`);
let Lower = "Hello Earthling";
console.log(Lower.toLowerCase());

//*5. Check if the sentence "nice shoes" contains the letter l or n. 
console.log(`--------5---------`);
let l = "nice shoes";
console.log(l.includes("n"));

//*6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
//javascript - jjavascriptj
let sub = "ramiz";
let firstChar = sub.substring(0,1);

console.log(firstChar + sub + firstChar);

//*7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
//*eg. of output: javascript => iptJavaScriptipt
console.log(`--------7---------`);
let myString = "Francesca";
let lastThreeChar = myString.substring(myString.length -3);
console.log(lastThreeChar + myString + lastThreeChar); 

//*8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
console.log(`--------8---------`);
let value = "myString";
console.log(value.toUpperCase());
console.log(value.includes("java"));

//*9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
console.log(`--------9---------`);
let replace = "JavaScript";
console.log(replace.replace("J", "t"));

//*10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 
console.log(`-------10---------`);
let myName = "Ramez";
let city = "Berlin";
let study = "Web Development";
console.log(`My Name is ${myName} i live in ${city} i study ${study}.`);

//*11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
console.log(`-------11---------`);
let name = "the quick brown fox";
let result = name.slice(0, 1).toUpperCase();
console.log(result);











