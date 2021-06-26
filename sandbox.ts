let greet: Function;

greet = () => {
  console.log('hello, world');
};

const add = (a: number, b: number = 10, c: number | string = 10) => {
  console.log(a + b);
  console.log(typeof c);
};

console.log(add(5, 10, '20'));

const minus = (a: number, b: number): void => {
  console.log(a, b);
};
let result = minus(10, 7);
