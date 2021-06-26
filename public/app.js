import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
// invOne.client = 'yoshi';
// invOne.amount = 50;
let invoices = [];
//! invoices.push('hello') not allowed
//! invoices.push({name: minseok}) not allowed
invoices.push(invOne); // allowed
invoices.push(invTwo); // allowed
/*
  invOne.client = 'yoshi'; //allowed
  invTwo.amount = 'hi' //! not allowed
  이러한 동작을 막아야 한다.
*/
invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.format());
    // * inv.client = 'hi'; 이런 동작도 가능하다. public으로 설정 되어있기 때문임.
});
/*
  Invoice 클래스는 접근이 가능하다. 개별 property들이 접근하거나 변경할 수 있다.
*/
/*

*/
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//!  inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, parseInt(amount.value));
});
