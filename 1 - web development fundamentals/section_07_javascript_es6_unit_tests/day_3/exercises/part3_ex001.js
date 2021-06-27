const assert = require("assert");

const greetPeople = (people) => {
  //let greeting = "Hello ";

  /*for (const person in people) {
    greeting += people[person];
  }*/

  for (const person in people) {
    people[person] = `Hello ${people[person]}`;
  }
  return people;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];

assert.deepStrictEqual(greetPeople(parameter), result);
