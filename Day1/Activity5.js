const myVariable = 10;
console.log(`Initial vale: ${myVariable} `);

// myVariable = 12;
// console.log(`new Value : ${myVariable}`);

const newVariable = 13;
console.log("Initial Value :" , newVariable);

try {
    newVariable = 30
} catch (error) {
    console.log("Error when trying to reassign",error.message);
}