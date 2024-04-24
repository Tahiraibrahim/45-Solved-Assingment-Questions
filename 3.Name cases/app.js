#! /usr/bin/env node
"use strict";
// lowercase
let personName = "ibrahim";
console.log("lowercase:", personName.toLowerCase());
// upper Case
console.log("uppercase:", personName.toUpperCase());
//upper Case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
