export class Configuration {
  private static configuration: Configuration | null = null;

  private constructor(
    public stringProperty: string,
    public intProperty: number
  ) {}

  static getInstance(): Configuration {
    if (this.configuration === null) {
      this.configuration = new Configuration("test", 123);
    }

    return this.configuration;
  }
}
