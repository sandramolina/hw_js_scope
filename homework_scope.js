//Episode 1
// const scenario = {
//     murderer: "Miss Scarlet",
//     room: "Library",
//     weapon: "Rope",
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(`Episode 1 veridict: ${verdict}`);

//Episode 2

// const murderer = "Professor Plum";

// const changeMurderer = function () {
//   let murderer = "Mrs. Peacock";
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(`Episode 2 veridict: ${verdict}`);

//Episode 3
// let murderer = "Professor Plum";

// const declareMurderer = function () {
//   let murderer = "Mrs. Peacock";
//   return `The murderer is ${murderer}.`;
// };

// const firstVerdict = declareMurderer();
// console.log("First Verdict: ", firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log("Second Verdict: ", secondVerdict);

//Episode 4
// let suspectOne = "Miss Scarlet";
// let suspectTwo = "Professor Plum";
// let suspectThree = "Mrs. Peacock";

// const declareAllSuspects = function () {
//   let suspectThree = "Colonel Mustard";
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// };

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//Episode 5
// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Kitchen",
//   weapon: "Candle Stick",
// };

// const changeWeapon = function (newWeapon) {
//   scenario.weapon = newWeapon;
// };

// const declareWeapon = function () {
//   return `The weapon is the ${scenario.weapon}.`;
// };

// changeWeapon("Revolver");
// const verdict = declareWeapon();
// console.log(verdict);

//Episode 6
let murderer = "Colonel Mustard";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    murderer = "Mrs. White";
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
