import { Contract } from "./contract";

export class AttributeConsumer {
  constructor(public consumerName: string, public providerName: string) {}

  public getContract(): Contract {
    return {
      consumer: this.consumerName,
      provider: this.providerName,
    };
  }
}
