function addNumber (a , b) {
    return a + b;

}

const num1 = 8;
const num2   = 4;


const result = addNumber(num1 ,num2)

console.log(`The sum of  ${num1} and ${num2} is ${result}  `);


function subNumber (a , b){
    return a - b;

}

const num3 =  4;
const num4 = 2;

const sub = subNumber(num3 , num4);

console.log(`the subtraction of ${num3} and ${num4} is ${sub}`);


function Multiply(a,b){
    return a*b ;
}

const num5 = 8;
const num6 = 3;

const mul = Multiply(num5, num6);

console.log(`the multiplication of ${num5} and ${num6} is ${mul} `);

function divide(a, b){
    return a / b ;
}

const num7 = 8;
const num8 = 7;

const div = divide(num7, num8);
console.log(`the divsion of ${num7} and ${num8} is ${div}`);

function remainder (a,b) {
    return a% b;
}

const chad = 10;
const suraj = 3;

const rem = remainder(chad, suraj);
console.log(`the remainder of ${chad} and ${suraj} is ${rem}`);