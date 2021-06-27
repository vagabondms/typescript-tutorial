import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { hasFormatter } from './interfaces/hasformatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = <HTMLSelectElement>document.querySelector('#type');
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    parseInt(amount.value),
  ];

  let doc: hasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, 'end');
});

// tuples

let arr = ['ryu', 25, true];
arr[0] = false;

let tup: [string, number, boolean] = ['ryu', 25, true];
