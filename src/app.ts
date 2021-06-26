// classes
class Invoice {
  // public client: string; // 읽고 쓰기 가능
  // readonly details: string; // 읽기만 가능
  // private amount: number; // class 안에서만 읽기가 가능.
  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }
  // ! 위를 단축해서 아래와 같이 사용할 수 있다.
  constructor(
    public client: string,
    readonly details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);

let invoices: Invoice[] = [];
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
