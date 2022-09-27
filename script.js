let number = "";

let number1 = "";

let operand = "";

let output = document.querySelector(".output-text")

console.log(output.value);

function one() {
    number += "1"
    output.innerHTML = number;
    console.log(number);
}

function one() {
    number += "1"
    output.innerHTML = number;
    console.log(number);
}
function two() {
    number += "2"
    output.innerHTML = number;
    console.log(number);
}
function three() {
    number += "3"
    output.innerHTML = number;
    console.log(number);
}
function four() {
    number += "4"
    output.innerHTML = number;
    console.log(number);
}
function five() {
    number += "5"
    output.innerHTML = number;
    console.log(number);
}
function six() {
    number += "6"
    output.innerHTML = number;
    console.log(number);
}
function seven() {
    number += "7"
    output.innerHTML = number;
    console.log(number);
}
function eight() {
    number += "8"
    output.innerHTML = number;
    console.log(number);
}
function nine() {
    number += "9"
    output.innerHTML = number;
    console.log(number);
}

function zero() {
	number += "0"
    output.innerHTML = number;
    console.log(number);
}
function clearNumber() {
    number = "";
    output.innerHTML = number;
    console.log(number);
}

function clearAll() {
    number = "";
    number1 = "";
    output.innerHTML = number;
    console.log(number);
}

function plus() {
    number1 = number;
	output.innerHTML = number + "+";
    number = "";
    operand = "plus";
	
}

function minus() {
    number1 = number;
	output.innerHTML = number + "-";
    number = "";
    operand = "minus";
}

function multiply() {
    number1 = number;
	output.innerHTML = number + "*";
    number = "";
    operand = "multiply";
}

function divide() {
    number1 = number;
	output.innerHTML = number + "/";
    number = "";
    operand = "divide";
}

function equals() {
    if (operand == "plus") {
        number = Number(number1) + Number(number);
    }
    if (operand == "minus") {
        number = Number(number1) - Number(number);
    }
    if (operand == "multiply") {
        number = Number(number1) * Number(number);
    }
    if (operand == "divide") {
        number = Number(number1) / Number(number);
    }
    
    output.innerHTML = number;
    console.log(number);
}