import { CsvGenerator } from "./CsvGenerator";
import { PdfGenerator } from "./PdfGenerator";

console.log("** CSV **");
const csvRaport = new CsvGenerator();
csvRaport.generateReport();

console.log("\n** PDF **");
const pdfRaport = new PdfGenerator();
pdfRaport.generateReport();
