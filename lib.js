function sum(numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++) result += numbers[i];
    return result;
}

function avg(numbers){
    return sum(numbers) / numbers.length;
}

function max(numbers){
    let result = numbers[0];
    for (let i =1; i < numbers.length; i++) if (result < numbers[i]) result = numbers[i]; 
    return result;
}


module.exports = {
    sum,
    avg,
    max,
}