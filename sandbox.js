// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'
age = 30;
//isLoggedIN = 25;
isLoggedIn = true;
// arrays
var ninjas = [];
// ninjas = [10,23] //! 안된다.
// ninjas = ['yoshi', 'mario']; //! 된다.
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false) //!  불가!
// let mixed: (string | number | boolean)[] = [];
console.log(mixed);
var uid = 'hi';
//objects
// * 아래도 가능하긴 하다. 하지만 권장하지 않음
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
//! 사전에 설정한 것이다.
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
};
