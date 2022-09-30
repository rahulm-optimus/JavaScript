"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; //mistakenly mistyped to check strict mode
// if (hasDriversLicense) console.log("I can drive");

//functions:fundamental building block
// function logger() {
//   console.log("my name is rahul ");
// }

// logger();

// const length = Number(prompt("enter the length :"));
// const breadth = Number(prompt("enter the breadth :"));

// function areaOfRectangel(length, breadth) {
//   console.log(
//     `length of rectangle : ${length}, breadth of rectangle: ${breadth}`
//   );
//   const area = length * breadth;
//   return area; //to produce a result
// }

// const desiredArea = areaOfRectangel(length, breadth); //need to store to call a function
// console.log(`area of rectangle: ${desiredArea}`);

//Function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1993);

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1993);

// console.log(age1, age2); //function is a value which we can store

//difference b/w both is, we can define declaration func. before they are declared

// const age1 = calcAge1(1993);
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// console.log(age1);

// const age2 = calcAge2(1993);
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// console.log(age2);

//Arrow function:defined in ES6

// const calcAge3 = (birthYear) => 2022 - birthYear;//in case of 1 paramenter
// const age3 = calcAge3(1993);
// console.log(age3);

// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 60 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntillRetirement(1993, "rahul")); //for multiple parameters
// console.log(yearsUntillRetirement("rahul", 1993)); //order is not correct

//calling a function inside a function

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// };

// console.log(fruitProcessor(4, 5));

//challenge1: testdata1: dolphins:44,23,71 Koalas:65,54,49   testdata2: dolphins:85,54,41 Koalas:23,34,27
//winning condition team A >= twice (team B )

// const calcAverage = (score1, score2, score3) => {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// };

// const checkWinner = () => {
//   const dolphinsAverage = calcAverage(
//     Number(prompt(`enter dolphins 1st score`)),
//     Number(prompt(`enter dolphins 2nd score`)),
//     Number(prompt(`enter dolphins 3rd score`))
//   );
//   console.log(`dolphins aveage: ${dolphinsAverage}`);

//   const koalasAverage = calcAverage(
//     Number(prompt(`enter Koalas 1st score`)),
//     Number(prompt(`enter Koalas 2nd score`)),
//     Number(prompt(`enter Koalas 3rd score`))
//   );
//   console.log(`Koalas aveage: ${koalasAverage}`);

//   if (koalasAverage >= 2 * dolphinsAverage) {
//     return console.log(`Koalas wins`);
//   } else if (dolphinsAverage >= 2 * koalasAverage) {
//     return console.log(`Dolphins wins`);
//   } else if (dolphinsAverage === koalasAverage) {
//     return console.log(`draw`);
//   } else {
//     return console.log(
//       `Average score is not twice as of  others team : No wins `
//     );
//   }
// };

// checkWinner();

//Arrays

// const freind1 = "rahul";
// const friend2 = "shivali";
// const friend3 = "ruchi";

// const friends = ["rahul", "shivali", "ruchi"];

// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // to call last value if there are many items

// friends[3] = "nikhil";
// console;

// const rahul = ["age:29", "male", friends];
// console.log(rahul); // arrays inside arrays

//add elements

// const friends = ["rahul", "shivali"];
// console.log(friends);
// const newLength = friends.push("ruchi"); //to add in the end
// console.log(friends);
// console.log(newLength);
// const newLength1 = friends.unshift("nikhil");
// console.log(friends);
// console.log(newLength1);

// //remove elements

// friends.pop(); //remove from the end
// console.log(friends);
// friends.shift(friends); //from the start
// console.log(friends);

// console.log(friends.indexOf("mehra")); //to check the presence
// console.log(friends.includes("mehra")); //better way to check the presence

//challenge:2

// let billValue = Number(prompt(`Hey enter the bill:`));

// function tipCal(billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     const tip = 0.15 * billValue;
//     const totalBill = tip + billValue;
//     console.log(`Bill without tip :${billValue}`);
//     console.log(`Tip applicable :${tip} (15%)`);

//     return totalBill;
//   } else {
//     const tip = 0.2 * billValue;
//     const totalBill = tip + billValue;
//     console.log(`Bill without tip :${billValue}`);
//     console.log(`Tip applicable :${tip} (20%)`);
//     return totalBill;
//   }
// }

// const tipcal = tipCal(billValue);
// console.log(`Your bill was :${billValue} and total bill after tip ${tipcal} `);

//Objects--data structure

// const rahulIdentity = {
//   firstName: "Rahul",
//   lastName: "Mehra",
//   Age: 2022 - 1993,
// };

// console.log(rahulIdentity.firstName);
// console.log(rahulIdentity.Age); //calling by dot operator
// console.log(rahulIdentity["lastName"]); //calling by brakets
// //difference b/w object and arrays --- sequence does not matter in objects
// const nameKey = "Name";

// console.log(rahulIdentity["first" + nameKey]); //it does not work with dot operator

// //expression is something that take valuees and give outcomes
// const intersetedIn = prompt(
//   "what do you want to know about me : firstName , lastName ,Age"
// );

// console.log(rahulIdentity[intersetedIn]); //experiment with truthy and falsy
// if (rahulIdentity[intersetedIn]) {
//   console.log(rahulIdentity[intersetedIn]);
// } else {
//   console.log("wrong request");
// }

// //to add in objects
// rahulIdentity.location = "Kangra";
// rahulIdentity["state"] = "Himachal";
// console.log(rahulIdentity);

//challenge:3

// const jonas = {
//   firstName: "jonas",
//   friend1: "michael",
//   friend2: "steve",
//   friend3: "mike",
// };

// console.log(
//   ` ${jonas.firstName} has 3, and his best friend is ${jonas.friend3} }`
// ); //can not use dot length in calling from objects

//object methods

// const rahulIdentity = {
//   firstName: "Rahul",
//   lastName: "Mehra",
//   birthYear: 1993,
//   hasDrivingLicense: true,

//   //method:2
//   // age: function () {
//   //   // console.log(this); //this method to call keys inside the object
//   //   return 2022 - this.birthYear;
//   // },

//   //method:3
//   calAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(rahulIdentity.age());
// console.log(rahulIdentity["age"]());//method:2

// console.log(rahulIdentity.calAge());
// console.log(rahulIdentity.age);//method:3

//challenge:4   test values //mark miller :78kg and 1.69m height   //john smith :92kg and 1.95m height

// const markMiller = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const johnSmith = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calBMI: function () {
//     this.BMI = this.mass / this.height ** 2; //saved as its own property
//     return this.BMI;
//   },
// };

// console.log(
//   `Mark BMI: ${markMiller.calBMI()} and John BMI: ${johnSmith.calBMI()}`
// );

// if (markMiller.calBMI() > johnSmith.calBMI()) {
//   console.log(`${markMiller.fullName} has higher BMI `);
// } else if (markMiller.calBMI() < johnSmith.calBMI()) {
//   console.log(`${johnSmith.fullName} has higher BMI`);
// } else {
//   console.log(`having same BMI`);
// }

//loops

// for (let x = 1; x <= 5; x += 1) {
//   // 1st: initial value 2nd:consdition 3rd:updation for the initial value
//   console.log(`the value is going to repeat : ${x}`);
// }

// const rahulIdentity = [
//   "rahul",
//   "mehra",
//   1993,
//   ["shivali", "ruchi", "nikhil"],
//   "himachal",
// ];

// const types = [];

// for (let x = 0; x < rahulIdentity.length; x += 1) {
//   let y = ["first", "second", "third", "forth", "fifth"];
//   console.log(
//     `value ${y[x]}: ${rahulIdentity[x]} -----  `,
//     typeof rahulIdentity[x]
//   );
//   types.push(typeof rahulIdentity[x]); //to add in empty array using end add push
// }

// console.log(types);

//continue and break

// const rahulIdentity = [
//   "rahul",
//   "mehra",
//   1993,
//   ["shivali", "ruchi", "nikhil"],
//   "himachal",
// ];

// const types = [];

// for (let x = 0; x < rahulIdentity.length; x += 1) {
//   if (typeof rahulIdentity[x] !== "string") continue;
//   console.log(`${rahulIdentity[x]} :its a string`);//to continue
// }

// const rahulIdentity = [
//   "rahul",
//   "mehra",
//   1993,
//   ["shivali", "ruchi", "nikhil"],
//   "himachal",
// ];

// const types = [];

// for (let x = 0; x < rahulIdentity.length; x += 1) {
//   if (typeof rahulIdentity[x] === "number") break;
//   console.log(`up to the number: ${rahulIdentity[x]} `); //to break
// }

//while

// for (let x = 1; x <= 5; x += 1) {
//   console.log(x);//difference b/w while and for
// }

// let y = 1;
// while (y <= 5) {
//   //only needs condition to keep running
//   console.log(`while condition true: ${y}`);
//   y += 1;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a  ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`loop ended after getting six`);
//   }
// }

//challenge: 5

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(`All bills : ${bills}`);
// let tips = [];
// let totalbills = [];

// for (let x = 0; x < bills.length; x += 1) {
//   let billValue = bills[x];

//   function tipCal(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//       const tip = 0.15 * billValue;
//       tips.push(tip);

//       const totalBill = tip + billValue;
//       totalbills.push(totalBill);

//       return totalBill;
//     } else {
//       const tip = 0.2 * billValue;
//       tips.push(tip);
//       const totalBill = tip + billValue;
//       totalbills.push(totalBill);

//       return totalBill;
//     }
//   }

//   const tipcal = tipCal(billValue);
// }
// console.log(`Tips of all bills :${tips}`);
// console.log(`Total bills :${totalbills}`);

// let calcAverage = function (arr) {
//   let sum = 0;
//   for (let x = 0; x < arr.length; x += 1) {
//     sum = sum + arr[x];
//   }

//   return sum / arr.length;
// };

// console.log(`Average of all bills :${calcAverage(bills)}`);
// console.log(`Average of all tips :${calcAverage(tips)}`);
// console.log(`Average of all totalbills :${calcAverage(totalbills)}`);
