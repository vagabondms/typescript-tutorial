var greet;
greet = function () {
    console.log('hello, world');
};
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(typeof c);
};
console.log(add(5, 10, '20'));
var minus = function (a, b) {
    console.log(a, b);
};
var result = minus(10, 7);
