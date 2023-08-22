let firstNR = 0;
let secondNR = 0;
let operator = "";
let solution = 0;
const valueNR = [];
let singleNumber = 0;

// const valueDisplay = document.querySelector('#value');

const add = function(a, b) {
    return a + b;
};

const substract = function(a, b) {
    console.log(a, b);
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const devide = function(a, b) {
    return a / b;
};

const sum = function(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
};

const power = function(a, b) {
    return Math.pow(a, b);
};

const factorial = function(a) {
    let counter = 0;
    let arr = [];

    if(a === 0) {
    return 1;
    }
    else {
    for (let index = 0; index < a; index++) {
        arr[index] = a - counter;
        counter++;
    }

    return arr.reduce((sum, current) => sum * current);
    }
};

const operate = function(operator, firstNR, secondNR) {
    if(operator === "+") {return add(firstNR, secondNR)};
    if(operator === "-") {return substract(firstNR, secondNR)};
    if(operator === "*") {return multiply(firstNR, secondNR)};
    if(operator === "/") {return devide(firstNR, secondNR)};
    if(operator === "POW") {return power(firstNR, secondNR)};
    if(operator === "FACT") {return factorial(firstNR)};
    if(operator === "") {return secondNR};
}

const changeValue = function(newValue) {
    if(newValue === '.' && valueNR.length === 0) {newValue = '0.'};
    if(newValue === '.' && (valueNR.includes('.') || valueNR.includes('0.'))) {return}
    else {
        
        console.table(valueNR);
        valueNR.push(newValue);
        singleNumber = Number(valueNR.join(''));
        document.getElementById("value").innerText = singleNumber;
    }
}

const roundResult = function(number) {
    return Math.round(number * 10000) / 10000;
}

const changeOperator = function(newOperator) {
    calculation();
    operator = newOperator;
}

const calculation = function() {
    if(solution !== 0) {firstNR = solution}

    if(firstNR === 0) {firstNR = singleNumber}
    else if(firstNR !== 0) {secondNR = singleNumber};
    
    if (singleNumber !== 0) {document.getElementById("value").innerText = singleNumber; }

    if(firstNR === 0 || (secondNR === 0 && operator !== "")) {solution = 0}
    else if(firstNR !== 0 && secondNR !== 0) {
        solution = roundResult(operate(operator, firstNR, secondNR));
        document.getElementById("value").innerText = solution;    
    };
    valueNR.length = 0;
    singleNumber = 0;
    operator="";
}

const result = function() {
    calculation();
    if(secondNR === 0) {solution = firstNR};
    document.getElementById("value").innerText = solution;
}

