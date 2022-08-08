let container = document.getElementById("container");
let row = document.getElementsByClassName("row");

let one = document.getElementById("number1");
let two = document.getElementById("number2");
let three = document.getElementById("number3");
let four = document.getElementById("number4");
let five = document.getElementById("number5");
let six = document.getElementById("number6");
let seven = document.getElementById("number7");
let eight = document.getElementById("number8");
let nine = document.getElementById("number9");
let zero = document.getElementById("number0");

one.addEventListener("click",thisOne);
two.addEventListener("click",thisTwo);
three.addEventListener("click",thisthree);
four.addEventListener("click",thisfour);
five.addEventListener("click",thisfive);
six.addEventListener("click",thissix);
seven.addEventListener("click",thisseven);
eight.addEventListener("click",thiseight);
nine.addEventListener("click",thisnine);
zero.addEventListener("click",thiszero);


function thisOne(){
console.log(one.value);
};

function thisTwo(){
console.log(two.value);
};

function thisthree(){
console.log(three.value);
};

function thisfour(){
console.log(four.value);
};

function thisfive(){
console.log(five.value);
};

function thissix(){
console.log(six.value);
};

function thisseven(){
console.log(seven.value);
};

function thiseight(){
console.log(eight.value);
};

function thisnine(){
console.log(nine.value);
};

function thiszero(){
    console.log(zero.value);
    };


/*function operate () {
   // num1 = Number(prompt("number one"));
    //num2 = Number(prompt("number two"));
    opera = addNums() //addEventListener(click, operaterBtn); 
    let results = `${opera}`;
}
operate();
*/
function addNums () {
    let a ;
    let b ;
    let addResults = a + b;
    console.log(addResults);
}

function subtractNum (num1, num2) {
    let a = num1;
    let b = num2;
    let subResults = a - b;
    console.log(subResults);  
}

function multiplyNum (num1, num2) {
    let a = num1;
    let b = num2;
    let multiResults = a * b;
    console.log(multiResults); 
}


function divideNum (num1, num2) {
    let a = num1;
    let b = num2;
    let divResults = a / b; 
    console.log(divResults);
}