import { Generator } from "./Generator";

export class PdfGenerator extends Generator {
  protected generateFile(): void {
    console.log("Generate file for PDF");
  }

  protected prepareData(): void {
    console.log("Prepare data for PDF");
  }

  protected getData(): void {
    console.log("Get data for PDF");
  }
}
