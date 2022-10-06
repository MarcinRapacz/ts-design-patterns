import { Generator } from "./Generator";

export class ExcelGenerator extends Generator {
  protected generateFile(): void {
    console.log("Generate file for excel");
  }

  protected prepareData(): void {
    console.log("Prepare data for excel");
  }
}
