//  Part 1
let age = prompt('Enter your age:');
let yearsLeft = 18 - age;
if (age >= 18) {
    console.log('You are old enough to drive.');
} else {
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

// Part 2
let myAge = 25;
let yourAge = prompt("Enter your age:");
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are the same age.");
}

// part 3
let a = 4; 
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

let result = a > b ? 'a is greater than b' : 'a is less than b';
console.log(result);


// part 4 
let month = prompt("Enter the month:");
month = month.toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
    console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer.");
} else {
    console.log("That's not a valid month.");
}

// part 5
let score = prompt("Enter the student's score:");
score = Number(score);

if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score <= 79) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C');
} else if (score >= 50 && score <= 59) {
    console.log('D');
} else if (score >= 0 && score <= 49) {
    console.log('F');
} else {
    console.log("Invalid score.");
}