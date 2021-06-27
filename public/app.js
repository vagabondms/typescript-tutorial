import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plubing work', 200);
// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the mario website', 300);
// // invOne.client = 'yoshi';
// // invOne.amount = 50;
// let invoices: Invoice[] = [];
// //! invoices.push('hello') not allowed
// //! invoices.push({name: minseok}) not allowed
// invoices.push(invOne); // allowed
// invoices.push(invTwo); // allowed
// /*
//   invOne.client = 'yoshi'; //allowed
//   invTwo.amount = 'hi' //! not allowed
//   이러한 동작을 막아야 한다.
// */
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.details, inv.format());
//   // * inv.client = 'hi'; 이런 동작도 가능하다. public으로 설정 되어있기 때문임.
// });
/*
  Invoice 클래스는 접근이 가능하다. 개별 property들이 접근하거나 변경할 수 있다.
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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.value);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.value);
    }
    console.log(doc);
});
