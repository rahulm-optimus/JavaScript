// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//How to solve problems

//step:1 To understand the problem
//step:2 To break into parts
//step:3 To research with the help of sites :stackoverflow or MDN

// Problem:to check temperature amplitude with the help of temperature array provided

// let tem = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let tem1 = [4, 3, 2];
// // let tem = [3, 2, 1];

// const temAmplitude = function (arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; ++i) {
//     let currenttem = arr[i];
//     if (typeof currenttem !== "number") continue;
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return (
//     `Max temerature :${max}` +
//     `\nMin temperature :${min} ` +
//     `\nTemperature amplitude :${max - min}`
//   );
// };
// console.log(temAmplitude(tem1));

//Debugging

//step:1 Identify --becoming aware that there is a bug
//step:2 Find --isolating where exactly the bug is happening
//step:3 Fix --correct
//step:4 Prevent --preventing it from happening again

//Problem:To covert input data from celcius to kelvin

// const measureKelvin = function () {
//   const measurement = {
//     type: "temperature",
//     unit: "celcius",
//     value: prompt("Degrees Celcius : "),
//   };

//   // console.warn(measurement);
//   // console.error(measurement);
//   // console.table(measurement);

//   const Kelvin = measurement.value + 273; //here is the bug

//   // const Kelvin = Number(measurement.value) + 273;//bug free
//   return Kelvin;
// };
// console.log(measureKelvin());

//challenge:

// let test1 = [17, 21, 23];
// let test2 = [12, 5, -5, 0, 4];
// let printForecast = function (arr) {
//   for (let x = 0; x < arr.length; x += 1) {
//     console.log(`${arr[x]}°C in ${x + 1}`);
//   }
// };

// printForecast(test2);
