#! /usr/bin/env node

let car:  string = 'subaru';

// Test 1 : Equality Compration(true)

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru') //True

// Test 2 : Strict equality Compration(true)

 console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru') //True

 // Test 3 : inequality Compration(false)

console.log("Is car != 'subaru'? I predict false.")
 console.log(car != 'subaru') //false

 // Test 4 : Strict inequality Compration(false)

 console.log("Is car !== 'subaru'? I predict false.")
 console.log(car !== 'subaru') //false

// Test 5 : less then Compration(false)

console.log("Is car < 'subaru'? I predict True.")
console.log(car < 'subaru') //false (lexicographic comprarison)

 // Test 6 : Greeter then Compration(false)

console.log("Is car > 'subaru'? I predict True.")
 console.log(car > 'subaru') //false (lexicographic comprarison)

 // Test 7 : less then or equal Compration(true)

 console.log("Is car <= 'subaru'? I predict True.")
console.log(car <= 'subaru') //True

// Test 8 : Greeter then or equal Compration(true)

 console.log("Is car >= 'subaru'? I predict True.")
 console.log(car >= 'subaru') //Tru

// Test 9 : Checking truthiness(true)

 console.log("Is car? 'subaru'? I predict True.")
console.log(car);  //Truth (non-empty string is truthy)

 // Test 10 : Checking falseness (false)

 console.log("Is car? 'subaru'? I predict True.")
console.log(!car); //false (non-empty string is truthy)


