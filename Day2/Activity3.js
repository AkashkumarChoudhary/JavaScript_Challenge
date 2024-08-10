function CompareNuMBERS(a,b) {
    if(a > b){
        console.log(`${a} is greater than ${b}`);
    } else if(a < b){
        console.log(`${a} is less than ${b}`);
        }else {
            console.log(`${a} is equal to ${b}`);
            
        }
}

const num1 = 10;
const num2 = 20;

CompareNuMBERS(num1, num2);

function Task9(a,b){
    if(a>=b){
        console.log(`${a} is greater than equal to ${b}`);
        
    }else if(a<=b){
        console.log(`${a} is less than equal to ${b}`);
        
    }else{
        console.log(`${a}is equal to ${b}`);
        
    }

}

const num3 = 80;
const num4= 80;

Task9(num3,num4);


function task10(a,b){
    if(a==b){
        console.log(`${a} is equal to ${b} using ==`);
    } else {
        console.log(`${a} is not equal to ${b} using ==`);
        
    }

    if(a ===b) {
        console.log(`${a} is equal to ${b} using ===`);
        
    } else{
        console.log(`${a} is not equal to ${b}using === `);
        
    }
}

const no = 10;
const nos ='10';

task10 (no, nos);