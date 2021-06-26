var greet = function (name, greeting) {
    console.log(name);
};
greet('1', '2');
var calc;
calc = function (numberOne, numberTwo, action) {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
