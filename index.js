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

// Function
// Phase 1
function getMilk(money) {   
    var bottles = 5 / 1.5;
    bottles = Math.floor(bottles);
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk " + bottles);
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    }
    
    getMilk(5);

// Phase 2 - Life in Weeks Coding Exercise
function lifeInWeeks(age) {

        const ageLeft = 90 - age;
        
        const x = ageLeft * 365;
        const y = ageLeft * 52;
        const z = ageLeft * 12;
    
        console.log(`You have ${x} days, ${y} weeks, and ${z} months left.`);
    }
    
lifeInWeeks(56);

// Phase 3
function getMilk(money) {   
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    console.log("buyMilk " + calcBottle(money, 1.5));
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, 1.5);
}

function calcBottle(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;

    return change;
}

console.log(`Here is your change : ${getMilk(4)}$`);

// Test - BMI Calculator
function bmiCalculator(weight, height) {
    bmi = weight / Math.pow(height, 2);
    return bmi;
}

bmiCalculator(65, 1.8); 

// BMI Calculator if else
function bmiCalculator (weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi < 18.5) {
        return `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi <= 24.9) {
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi}, so you are overweight.`;
    }
}

// Love Calculator
name = prompt("Masukan Namamu :");
crush = prompt("Masukan Nama pasanganmu :");

var loveScore = Math.random() * 100;
loveScore = Math.round(loveScore) + 1;

if(loveScore > 80) {
    alert(`Precentage of love between ${name} & ${crush} : ${loveScore}% (Cieee... Sikat bos!)`);
} else if(loveScore > 60 && loveScore <= 80) {
    alert(`Precentage of love between ${name} & ${crush} : ${loveScore}% (Hubunganmu akan diterpa banjir)`);
} else {
    alert(`Precentage of love between ${name} & ${crush} : ${loveScore}% (Lu punya uang lu punya cinta. Jika gapunya dukun solusinya)`);
}



// Leap Year
function isLeap(year) { 
    //Write your code here.    
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                console.log("Leap year.")
            }else {
                console.log("Not leap year.")
            }
        } else {
            console.log("Leap year.");
        }
    } else {
        console.log("Not leap year.")
    }

}

// Arrays
var guestlist = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

let guestName = prompt("Input your name:");

if (guestlist.includes(guestName)) {
    alert("Welcome! You are invited!");
} else {
    alert("Sorry... You are not invited.");
}

// FizzBuzz
var output = [];
var increaseNumber = 1;

function fizzBuzz() {
    if (increaseNumber % 3 === 0 && increaseNumber % 5 === 0) {
        output.push("FizzBuzz"); 
    } else if (increaseNumber % 3 === 0) {
        output.push("Fizz");
    } else if (increaseNumber % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(increaseNumber);
    }
    increaseNumber++;
    console.log(output);
}

// test
function whosPaying(names) {
    var number0fPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * number0fPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!"
}
