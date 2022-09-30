/*
let js = "amazing";
console.log(40 + 60 + 80 - 60);
console.log("rahul");
let myname = "raul";
console.log(myname);
//variable naming
let country = "India";
console.log(country);
let continent = "Asia";
console.log(continent);

// data types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
// type of data type
console.log(typeof "");
// when we need to delete a variable without creating a new one
javaScriptIsFun = "changed";
console.log(typeof javaScriptIsFun);
// how undefined value looks a like
let year;
console.log(year);
console.log(typeof year);
// how dynamic values work in js
year = 1992;
console.log(typeof year);
//null values are object
console.log(typeof null);

// How to define variables

let age = 30;
age = 31;
const birthyear = 1991;
var job = "programmer";
job = "teacher";

//operators

//basic-opeartors

const now = 2037;
const ageRahul = now - 1993;
const ageShivali = now - 1995;
console.log(ageRahul, ageShivali);

//modulus-operator

console.log(ageRahul * 2, 2 ** 3);

//concatenate-operator

const firstName = "rahul";
const lastName = "mehra";
console.log(firstName + " " + lastName);

//assignment-operator

let x = 20 + 10; //30
x += 10;
x++; //x=x+1
x--; //x=x-1
console.log(x);

//comparison-operator
console.log(ageRahul > ageShivali);
const isage = ageRahul < 25;
console.log(now - 1993 > now - 1995);
const now = 2037;
const ageRahul = now - 1993;
const ageShivali = now - 1995;
console.log(now - 1993 > now - 1995);
let x, y;
y = x = 25 - 10 - 5;
console.log(x, y);

//strings and literals

const firstName = "Rahul";
const job = "programmers";
const year = 2022;
const birthYear = 1993;
const rahul =
  "I'm " + firstName + " , a " + (year - birthYear) + " years old " + job;
console.log(rahul);
//here its hard to manage the spacing so will use template literals
const rahulNew = ` I'm  ${firstName} , a ${year - birthYear} years old ${job} `;
console.log(rahulNew);
//used for multi lines
console.log(`hi my name is 
rahul 
what about you ?
`);

//if/else

const age = 20;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("applicable ");
} else {
  const yearsLeft = 18 - age;
  console.log(`applicable after ${yearsLeft}`);
} //controlled structure
const birthYear = 1993;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//challenge-2: to check who's BMI is higher as per controlled flow
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(`Mark's BMI:${BMIMark} John's BMI:${BMIJohn}`);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than the John's BMI`);
} else {
  console.log(`John's BMI is higher than the Mark's BMI`);
}

//conversion and coercion

//type conversion(manually)

const inputYear = 1993;
console.log(Number(inputYear) + 29);

//type coercion(auto)

console.log("I'am " + 29 + " years old programmer");
console.log("x" - 10 - 2);
//game to guess te number
let n = "1" + 1;
n = n - 1;
console.log(n);

//truthy and falsy values

//5 falsy values :0,'',undefined,null,NAN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
const value = "x";
if (value) {
  console.log(
    "its True because am assuming its a boolean conversion with a string inside it "
  );
} else {
  console.log("its going to be false if it's an empty string");
}

//Equality operators

const age = 18;
if (age === "18") console.log("you are an adult");
else console.log("not an adult "); //strict equality operator
if (age == "18") console.log("you are an adult"); //loose equality operator
else console.log("not an adult ");
const favouriteColor = prompt("whats ypur fav. color?"); //input
if (favouriteColor === "black") console.log("Black is an awesome number");
else if (favouriteColor === "yellow") console.log("yellow like a sunflower ");
if (favouriteColor !== "black") console.log("not bad ");

//boolean logic: and,or and not operators

//not > or & and

const hasDriversLicense = true;
const hasGoodvision = true;
console.log(hasDriversLicense && hasGoodvision); //and operator
console.log(hasDriversLicense || hasGoodvision); //or operator
console.log(!hasDriversLicense && !hasGoodvision); //not
if (hasDriversLicense && hasGoodvision) {
  console.log("able to drive");
} else "someone else needs to drive ";

//challenge-3:to check who wins

let dolphinsScrore1 = 97;
let dolphinsScrore2 = 112;
let dolphinsScrore3 = 101;
const dolphinsAverage =
  (dolphinsScrore1 + dolphinsScrore2 + dolphinsScrore3) / 3;
console.log(`Dolphin Score:${dolphinsAverage}`);
let koalasScrore1 = 109;
let koalasScrore2 = 95;
let koalasScrore3 = 106;
const koalasAverage = (koalasScrore1 + koalasScrore2 + koalasScrore3) / 3;
console.log(`Koalas Score:${koalasAverage} `);
if (koalasAverage > dolphinsAverage) {
  console.log("Koalas wins 🥇");
} else if (koalasAverage < dolphinsAverage) {
  console.log("Dolphins wins 🥇");
} else if (koalasAverage === dolphinsAverage) {
  console.log("draw 🤜🤛");
}
console.log("checking draw conditions");
if (
  koalasAverage === dolphinsAverage &&
  koalasAverage >= 100 &&
  dolphinsAverage >= 100
) {
  console.log("both wins 🥇🥇");
} else {
  console.log("No wins 🥈");
}


//switch statement: is not used when we have to compare its more of the conditional choice .

const day = prompt("Enter the day ?");

switch (day) {
  case "monday": //day==='monday'
    console.log("plan course structure");
    console.log("Meeting ");
    break;
  case "tuesday":
    console.log("preapring projects");
    break;
  case "wednesday":
  case "thursday":
    console.log("Practise codes");
    break;
  case "friday":
    console.log("meeting and planning ");
    break;
  case "saturday":
  case "sunday":
    console.log("weekend");
  default:
    console.log("not a valid day");
}

//same above case with the help of if else statements

// if (day === "monday") {
//   console.log("plan course structure");
// } else if (day === "tuesday") {
//   console.log("preapring projects");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Practise codes");
// } else if (day === "friday") {
//   console.log("meeting and planning ");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("weekend");
// } else {
//   console.log("not a valid day");
// }


//ternary opearator

const age = 29;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water💧");

const drink = age < 29 ? "wine 🍷" : "water💧";
console.log(drink);
console.log(`I like to drink ${age < 29 ? "wine 🍷" : "water💧"}`); //using expression inside the expression with the the help of ternary operator


//challenge4:to calculate the tip as per rule as follows if bill is b/w 50 and 300 tip is 15% else 20%

const billValue = 275;
const tip =
  billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `the bill was ${billValue},the tip was ${tip} ,and the total value  was ${
    billValue + tip
  }`
);
*/
