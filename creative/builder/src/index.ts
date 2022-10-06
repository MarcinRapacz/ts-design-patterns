import { Invoice } from "./Invoice";
import { InvoiceBuilder } from "./InvoiceBuilder";

const invoice: Invoice = new InvoiceBuilder()
  .setDate(new Date(2020, 1, 1))
  .setNumber("A1")
  .setVendor("Google")
  .setVendee("Me")
  .setLineItems(["El1", "El2", "El3"])
  .build();

console.log({ invoice });
