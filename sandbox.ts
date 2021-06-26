type first = (a: string, b: string) => void;

let greet: first = (name: string, greeting: string) => {
  console.log(name);
};
greet('1', '2');

let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string): number => {
  if (action === 'add') {
    return numberOne + numberTwo;
  } else {
    return numberOne - numberTwo;
  }
};

let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
