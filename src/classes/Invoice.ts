export class Invoice {
  constructor(
    public client: string,
    readonly details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
