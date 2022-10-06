import { DependencyScaner } from "./DependencyScaner";
import { QualityScaner } from "./QualityScaner";
import { ReportGenerator } from "./ReportGenerator";
import { SecurityScaner } from "./SecurityScaner";

export class ScanFacade {
  constructor(
    private qScaner = new QualityScaner(),
    private sScaner = new SecurityScaner(),
    private dScaner = new DependencyScaner(),
    private raportGenerator = new ReportGenerator()
  ) {}

  public scan(githubUrl: string) {
    const qError = this.qScaner.qualityScan(githubUrl);
    const sError = this.sScaner.securityScan(githubUrl);
    const dError = this.dScaner.dependencyScan(githubUrl);
    this.raportGenerator.generateReport(qError, sError, dError);
  }
}
