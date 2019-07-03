//**Logical Operators Exercises**

//These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console.**
//**Every capitalized word stands for the logical operator that you must use in each task.** Make sure that you are using the correct logical operator. 

//Declare two variables "a" with the value of true and "b" with the value of false. 

//1. Check the result of a AND b. 
console.log(`----1----`);
let a = true;
let b = false;
let result = (a && b);
console.log(result);

//2. Check the result of a OR b. 
console.log(`----2----`);
result = (a || b);
console.log(result);


//3. Check the result of NOT a AND b. 
console.log(`----3----`);
result = !(a && b);
console.log(result);

//4. Declare three more variables "x", "y", "z". Give these variables number values. 
//5. Check the result of whether x is greater than z AND x is greater than y. 
console.log(`--4-5----`);
let x = 5;
let y = 2;
let z = 3;
let result1 = ((x > z) && (x > y));
console.log(result1);


//6. Check the result of whether x is NOT equal to y. 
console.log(`----6----`);
result1 = !(x == y);
console.log(result1);

//7. Check the result of whether z is less than y OR z is greater than x. 
console.log(`----7----`);
result1 = ((z < y) || (z < x));
console.log(result1);
//8. Check the result of whether x is equal to z OR x is NOT equal to y.
console.log(`----8----`);
result1 = (!(x == z) || !(x == y));
console.log(result1);

//9. Check the result of whether x is greater than or equal to 10 AND y is less than or equal to 10. 
console.log(`----9----`);
result1 = ((x >= 10) && (y <= 10));
console.log(result1);


//10. Check the result of whether x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100. 
console.log(`---10----`);
result1 = (((x * z) < 100) || ((x * y) > 100));
console.log(result1);


