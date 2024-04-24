#! /usr/bin/env node

// lowercase
let personName: string= "ibrahim"
console.log("lowercase:",personName.toLowerCase());

// upper Case
console.log("uppercase:",personName.toUpperCase());

//upper Case
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));