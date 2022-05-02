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

const murderer = "Professor Plum";

const changeMurderer = function () {
  let murderer = "Mrs. Peacock";
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(`Episode 2 veridict: ${verdict}`);
