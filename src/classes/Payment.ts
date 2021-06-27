import { hasFormatter } from '../interfaces/hasformatter';

export class Payment implements hasFormatter {
  constructor(
    public recipient: string,
    readonly details: string,
    private amount: number
  ) {}

  format() {
    return `${this.recipient} is owed \$${this.amount} for ${this.details}`;
  }
}
