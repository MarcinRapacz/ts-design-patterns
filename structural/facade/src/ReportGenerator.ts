export class ReportGenerator {
  public generateReport(
    qualityScanErrors: string[],
    securityScanErrors: string[],
    dependencyScanErrors: string[]
  ) {
    console.log("RAPORT");
    console.log(qualityScanErrors);
    console.log(securityScanErrors);
    console.log(dependencyScanErrors);
  }
}
