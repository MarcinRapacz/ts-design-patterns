import { Invoice } from "./Invoice";

export class InvoiceBuilder {
  private _invoice: Invoice = new Invoice();

  public build = (): Invoice => {
    return this._invoice;
  };

  public setVendor = (vendor: string): this => {
    this._invoice.vendor = vendor;
    return this;
  };

  public setVendee = (vendee: string): this => {
    this._invoice.vendee = vendee;
    return this;
  };

  public setNote = (note: string): this => {
    this._invoice.note = note;
    return this;
  };

  public setLineItems = (lineItems: string[]): this => {
    this._invoice.lineItems = lineItems;
    return this;
  };

  public setNumber = (number: string): this => {
    this._invoice.number = number;
    return this;
  };

  public setDate = (date: Date): this => {
    this._invoice.dataTime = date;
    return this;
  };
}
