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
        console.log(result)
        break;
    case "avg":
        result = lib.avg(numbers);
        console.log(result)
        break;
    case "max":
        result = lib.max(numbers);
        console.log(result)
        break;
    case "mean2":
        pairCheck(numbers);
        result = lib.mean2(numbers);
        break;
    case "med2":
        pairCheck(numbers);
        result = lib.med2(numbers);
        break;
    case "pareto":
        pairCheck(numbers);
        result = lib.pareto(numbers);
        break;
    default:
        console.log("Wrong command!!!!");
        process.exit(1);
}


function pairCheck(numbers){
    if(numbers.length % 2){
        console.log("Something went wrong! perheps wrong numbers");
        process.exit(1);
    };
};