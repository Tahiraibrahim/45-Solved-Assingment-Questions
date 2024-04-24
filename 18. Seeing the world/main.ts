#! /usr/bin/env node

// // Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let places : string [] = ['Madina' , 'Makka' , 'London' , 'Turket' ,'Japan']
// console.log('original' + places);

// Print your array in its original order.

// console.log('copy' + [...places] .sort());

// Show that your array is still in its original order by printing it.

// console.log('original' + places);

// Reverse the order of your list. Print the array to show that its order has changed.

console.log('copy' + [...places] .sort().reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log('copy' + [...places] .sort().reverse());

// Reverse the order of your list. Print the array to show that its order has changed.

console.log('original :' + places.sort());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log('original :' + places.sort().reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log('original :' + places.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log('original :' + places.sort().reverse());


