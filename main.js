#!/usr/bin/env

const lib = require("./lib.js");

if(process.argv.length <= 3){
    console.log("Insufficient insert!");
    process.exit(1);
}

let command = process.argv[2]
let numbers = process.argv.slice(3, process.argv.length).map((n)=> parseFloat(n));

if(numbers.some((n)=>isNaN(n))){
    console.log("wrong input!!");
    process.exit(1);
}


let result;
switch(command){
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.avg(numbers);
        break;
    default:
        console.log("Wrong command!!!!");
        process.exit(1);
}

console.log(result);