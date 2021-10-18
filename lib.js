function sum(numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++) result += numbers[i];
    console.log(result);
    return result;
}

function avg(numbers){
    console.log(result);
    return sum(numbers) / numbers.length;
}

function max(numbers){
    let result = numbers[0];
    for (let i =1; i < numbers.length; i++) if (result < numbers[i]) result = numbers[i];
    console.log(result);
    return result;
}


function cartesian(numbers){
    pairs = [];
    for(let i = 0; i < numbers.length; i += 2){ 
        pairs.push([numbers[i], numbers[i+1]]);
    }
    return pairs
};

function mean2(numbers){
    let pairs = cartesian(numbers);
    let pairnum = pairs.length;
    let sumx = 0;
    let sumy = 0;
    pairs.forEach(pair => {
        sumx += pair[0];
        sumy += pair[1];
    });
    let result = [sumx/pairnum, sumy/pairnum];

    console.log(result[0], result[1]);
    return result;
};

function med2(numbers){
    let pairs = cartesian(numbers);
    let result = pairs[0];
    let minDis = 0;
    pairs.forEach(pair => {
        minDis += Math.sqrt((pairs[0][0]-pair[0])**2 + (pairs[0][0]-pair[1])**2);
    });

    for(let step = 1; step < pairs.length; step++){
        let disSum = 0;
        pairs.forEach(pair => {
            disSum += Math.sqrt((pairs[step][0]-pair[0])**2+(pairs[step][0]-pair[1])**2);
        });
        
        /*
        console.log("current med point: ", result);
        console.log("minmum distance: ", minDis);
        console.log("step: ", pairs[step]);   
        console.log("step distance: ", disSum);
        */

        if (disSum < minDis){
            minDis = disSum;
            result = pairs[step];
        };
    };

    console.log();
    return result;
};

function pareto(numbers){
    let pairs = cartesian(numbers);
    let result = []

    for (let outStep = 0; outStep < pairs.length; outStep++){
        let check = true;
        for (let inStep = 0; inStep < pairs.length; inStep++){
            if (outStep !== inStep && pairs[outStep][0] < pairs[inStep][0] && pairs[outStep][1] < pairs[inStep][1] ){
                check = false;
            }
        };

        if (check){
            result.push(pairs[outStep]);
        }
    };

    result.forEach(pair => {
        console.log(pair[0], pair[1]);
    })

    return result;
};

module.exports = {
    sum,
    avg,
    max,
    mean2,
    med2,
    pareto,
}