import { Generator } from "./Generator";

export class CsvGenerator extends Generator {
  protected generateFile(): void {
    console.log("Generate file for CSV");
  }

  protected prepareData(): void {
    console.log("Prepare data for CSV");
  }
}
