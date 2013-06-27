#!/usr/bin/env node

// check for prime number
var isPrime = function CheckPrime (n) {
for (i=2; i<= Math.sqrt(n); i++) {
if (n % i == 0) {return false;}
}
  return true;
}
// return prime
var primearr = function(k) {
    var counter = 0;
    var number = 2;
    var arr = [];
    while (counter < k) {
        if (isPrime(number)){
            arr.push(number);
            counter++;
        }
        number++;
    }
    return arr;
}

// print to console
var primestr = function(arr){
    return arr.join(",");
}

var k=100;

console.log("primearr(" + k + ")");
var out = primestr(primearr(k));

var fs = require('fs');
var outfile = "task2.txt";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);