let condition1 = true;
let condition2 =false;

let andResult = condition1 && condition2 ;
console.log("Result of condition1 && condition2: ", andResult);

let orResult = condition1 || condition2
console.log("Result of condition1 || condition2: " , orResult);

let notCondition1 = !condition1;
let notCondition2 = !condition2;

console.log("Result of !condition1: ",notCondition1 );
console.log("Result of !condition2: ",notCondition2);

let combineResult = (condition1 && condition2) || (!condition1 && !condition2);
console.log("Result of (condition1 && condition2) || (!condition1 && !condition2) :",combineResult);


