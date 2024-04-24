#! /usr/bin/env code

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


// Equality and Inequality Test 1
console.log("Equality test with strings:" , "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Equality test with strings:" , ("Apple" as string) != "Orange");

// Tests using the lower case function
console.log("Lower Case function test: ", "Hello".toLocaleLowerCase() === "hello");

//• Numerical tests involving equality and inequality
console.log("Equality test with numbers: ", 26 === 26);
//• Numerical tests involving inequality 
console.log("Inequality test with numbers: " ,(26 as number) != 35);

// greater than test
console.log("Greater than test: " , 10 > 5);
// less than test
console.log("less than test: " , 5 < 10);

// greater than or equal to 
console.log("Greater taan or equal to test: " , 10 >= 10);
// and less than or equal to 
console.log("less than or equal to test: " , 5 <= 10);

//• Tests using "and" and "or" operator
console.log("And operators test: " , 5===5 && 10> 5);
//• Tests using "or" operator
console.log("or operators test: " , 5===5 || false);

//• Test whether an item is in a array
const fruits : string[] = ['Mango' , 'Nashpati' , 'Orange'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));

//• Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ' ,!fruits.includes('Apple'));





