"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the mario website', 300);
var invoices = [];
//! invoices.push('hello') not allowed
//! invoices.push({name: minseok}) not allowed
invoices.push(invOne); // allowed
invoices.push(invTwo); // allowed
invOne.client = 'yoshi'; //allowed
//invTwo.amount = 'hi' //! not allowed
var form = document.querySelector('.new-item-form');
// console.log(form.children);
//!  inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, parseInt(amount.value));
});
