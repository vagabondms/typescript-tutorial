"use strict";
// classes
var Invoice = /** @class */ (function () {
    // public client: string; // 읽고 쓰기 가능
    // readonly details: string; // 읽기만 가능
    // private amount: number; // class 안에서만 읽기가 가능.
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    // ! 위를 단축해서 아래와 같이 사용할 수 있다.
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
/*
  invOne.client = 'yoshi'; //allowed
  invTwo.amount = 'hi' //! not allowed
  이러한 동작을 막아야 한다.
*/
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.format());
    // * inv.client = 'hi'; 이런 동작도 가능하다. public으로 설정 되어있기 때문임.
});
/*
  Invoice 클래스는 접근이 가능하다. 개별 property들이 접근하거나 변경할 수 있다.
*/
/*

*/
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
