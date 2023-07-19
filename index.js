// Using Lenght
let input = prompt("Input Character in here :");
let maxInput = 10;
inputLeft = maxInput - input.length;

console.log(`You have written ${input.length}, you have ${inputLeft} characters left`);

// Slice
console.log(`Your input is : ${input.slice(0,10)}`);

// if else statement
if(input.length < maxInput) {
    alert("Data succesfully input")
} else {
    alert(`Your characters is ${input.length} that was more than max input, please delete ${inputLeft} characters`)
};


// Capitalize first letter of the name
let name = prompt("What is your name?");

let firstChar = name.slice(0,1);

let upperCaseFirstChar = firstChar.toUpperCase();

let restOfName = name.slice(1, name.length);

let combineName = upperCaseFirstChar + restOfName.toLowerCase();

alert(`Hello, ${combineName}`);

// Number data implementation

// Dog age to human age formula

let dogAge = prompt("Input Dog Age here...");

if (!isNaN(dogAge)) {
    humanAge = (dogAge - 2) * 4 + 21;
    alert(`Your dog age in human age is ${humanAge}`);
} else {
    alert("Please input data by number");
}

// Increment & decrement
let x = 10;
let y = 30;

x += y;

x++ ;
x-- ;
