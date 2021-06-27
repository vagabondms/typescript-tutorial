import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
import { hasFormatter } from './interfaces/hasformatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: hasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, parseInt(amount.value));
  } else {
    doc = new Payment(tofrom.value, details.value, parseInt(amount.value));
  }
  list.render(doc, type.value, 'end');
});
