/* any type */
// 아래의 모든 것들이 잘 동작한다.
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
// 아래의 모든 것들이 다 동작한다.
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja = {
    name: 'hi',
    age: 'hi'
};
ninja = {
    name: 25,
    age: 'yoshi'
};
