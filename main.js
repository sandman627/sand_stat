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


pairCheck(numbers);

let result;
switch(command){
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "mean2":
        result = lib.mean2(numbers);
        break;
    case "med2":
        result = lib.med2(numbers);
        break;
    case "pareto":
        result = lib.pareto(numbers);
        break;
    default:
        console.log("Wrong command!!!!");
        process.exit(1);
}


function wrongPair(){
    console.log("Something went wrong! perheps wrong numbers");
    process.exit(1);
}

function pairCheck(numbers){
    if(numbers.length % 2){
        wrongPair();
    }
    numbers.forEach(num => {
        if(num === NaN){
            wrongPair();
        }
    })
};