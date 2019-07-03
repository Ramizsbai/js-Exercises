//# Array Exercises 
//## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
console.log(`--------1---------`);
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let city = "Berlin";
console.log(euroCities);

//2. Change the first item in the array to "Berlin".
console.log(`--------2---------`);
euroCities[0] = city;
console.log(euroCities);

//3. Print the length of the array "euroCities".
console.log(`--------3---------`);
console.log(euroCities.length);

//4. Remove the last item of the array "euroCities". 
console.log(`--------4---------`);
euroCities.pop();
console.log(euroCities);

//5. Use an array method to add "Budapest" to the euroCities array.
console.log(`--------5---------`);
euroCities.push("Budapest");
console.log(euroCities);

//6. Remove the second and third items from the euroCities array. 
console.log(`--------6---------`);
console.log(euroCities.splice(1, 2 ,"aha", "ah"));
//7. Create another variable namd asianCities and assign an array to the variable. Clone the array asianCities.
console.log(`--------7---------`);
let asianCities = ["bankok", "Tokyo", "phnom", "penh"];
let cloneArray = asianCities.slice();
console.log(cloneArray, asianCities);


//8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
console.log(`--------8---------`);
let storeArrayElement = asianCities.slice(1, 4);
console.log(storeArrayElement);

//9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
console.log(`--------9---------`);
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//10. Reverse the order of worldCities.
console.log(`-------10---------`);
worldCities.reverse();
console.log(worldCities);

//11. Replace the 3rd item in the array of worldCities with "Toronto". 
console.log(`-------11---------`);
worldCities[3] = "Toranto";
console.log(worldCities);

//12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
console.log(`-------12---------`);
worldCities.splice(2,0, "Washington");
console.log(worldCities);

/* 13. Write a program to join all elements of the result (worldCities) into a string. 
Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
Expected Output: 
"Berlin,London,Bangkok,Phnom Penh"
"Berlin+London+Bangkok+Phnom Penh" */
console.log(`-------13---------`);
console.log(worldCities.toString());

//14. Empty the array euroCities while keeping the original intact. 
//# Bonus
console.log(`-------14---------`);

//15. Write a program to reverse the string: "Hello World". 
console.log(`-------15---------`);
let reverse = "Hello World";
result = reverse.split("").reverse().join("");
console.log(result);



//## Extra Practice

//**Print the results to the console.**

/* 1. Make an array of your siblings' names or your favorite movie characters' names.
2. Make an array of your parents' names.
3. Combine these two arrays.
4. Add your pets' names.
5. Reverse the order of the array.
6. Access one of your parents' names.
7. Update the name of one of your parents. 
	 */
console.log(`Extra-practice`);
let movie = ["Hamada", "Tamim", "Mhd", "Alisio"];
let parents = ["Hassan", "Samah"];
let both = movie.concat(parents);
console.log(both);

both.reverse();
console.log(both);


















