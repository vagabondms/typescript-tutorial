const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//!  inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, parseInt(amount.value));
});
