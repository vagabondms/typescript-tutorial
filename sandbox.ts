// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'
age = 30;

//isLoggedIN = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];
// ninjas = [10,23] //! 안된다.
// ninjas = ['yoshi', 'mario']; //! 된다.

ninjas.push('shaun');

// union types
let mixed: (string | number)[] = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false) //!  불가!
// let mixed: (string | number | boolean)[] = [];
console.log(mixed);

let uid: string | number = 'hi';

//objects
// * 아래도 가능하긴 하다. 하지만 권장하지 않음
let ninjaOne: object;
ninjaOne = {
  name: 'yoshi',
  age: 30,
};

//! 사전에 설정한 것이다.
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColor: 'black',
  //   skills: [], //! 이부분은 실행되지 않음
};
