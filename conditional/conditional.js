//#Conditionals Exercises

//##These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use if statements to complete the following exercises. Print your results to the console

//1. Check if two given integer values are in the range of 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
 console.log(`-----1-----`);
let x = 70;
let y = 50;
if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
console.log(true);
}else{
console.log(false);
} 

//2. Check if three given integer values are in the range of 50 to 99 (inclusive). Print true if one or more of them are in the range.
console.log(`-----2-----`);
let z = 20;
if ((x >= 50 && x <= 99) || (z >= 50 && z <= 99) || (y >= 50 && y <= 99)){
    console.log(true);
    }else{
    console.log(false);
    } 
//3. Declare the variables a, b and c - give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
console.log(`-----3-----`);
let a = 70;
let b = 40;
let c = 100;

if (a > b && a > c) {
    console.log(a);
}else if (b > a && b > c) {
    console.log(b);
    
}else{
    console.log(c);
    
}
//4. Add "Py" in front of a given string (any string eg. "JavaScript"). If the given string begins with "Py", then print the original string (eg. Pythagoras).
console.log(`-----4-----`);
let myString = "JavaScript";

if (myString.includes("py")) {
    console.log("Pythagoras");
    
}else {
    console.log(myString);
    
}

//5. Calculate the sum of the two integers. If the sum is in the range of 50..80, print 65 otherwise print 80. 
console.log(`-----5-----`);
let sum1 = 4;
let sum2 = 4;

if (sum1 + sum2 >= 50 && sum1 + sum2 <= 80){
    console.log(65);
    
}else{
    console.log(80);
    
}

//6. Check whether the sum of two integers is 8 or whether their difference is 8. If one of these is the case, print true.
console.log(`-----6-----`);
if ((sum1 + sum2) == 8){
    console.log(true);
    
}else {
    console.log(false);
    
}
//7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true. 
console.log(`-----7-----`);
const d = 11;
 const f = 5;
 const sum = d + f;
 if ((d === 15) || (f === 15) || (sum === 15)) {
     console.log(true);
 } else {console.log(false);
 } 


//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
console.log(`-----8-----`);
const zz = 13;
 const u = 1;
 if ((zz % 7 === 0) || (zz % 11 === 0)) {
     console.log(`${z} is a multiple of 7 or 11`);
 } else if ((u % 7 === 0) || (u % 11 === 0)) {
     console.log(`${u} is a multiple of 7 or 11`);
 } else {
     console.log(`Neither ${zz} nor ${u} is a multiple of 7 or 11`);
 }
//9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum. 
console.log(`-----9-----`);
const p = 15;
 const t = 15;
 if (p !== t) {
     console.log(p + t);
 } else {
     console.log((p + t) * 3);
 }
//10. Calculate the difference between a specified number and 19 (e.g. 19 - x). If the specified number is greater than 19, print double the difference of (x - 19). 
console.log(`----10-----`);
const n = 10;
const summm = n - 19;

if (n <= 19) {
    console.log(19 - n);
} else {
    console.log(summm* 2);
}