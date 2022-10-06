export class Invoice {
  constructor(
    public number?: string,
    public dataTime?: Date,
    public vendor?: string,
    public vendee?: string,
    public lineItems?: string[],
    public note?: string
  ) {}
}
