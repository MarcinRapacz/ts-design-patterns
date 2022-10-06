export abstract class Generator {
  protected getData(): void {
    console.log("Base get data");
  }

  protected abstract prepareData(): void;

  protected abstract generateFile(): void;

  protected sendFile(): void {
    console.log("Base send file");
  }

  public generateReport(): void {
    this.getData();
    this.prepareData();
    this.generateFile();
    this.sendFile();
  }
}
