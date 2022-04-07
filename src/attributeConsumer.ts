import { Contract, Attribute, AttributeType } from "./contract";

export class AttributeConsumer {
  private attributes: Attribute[];

  constructor(public consumerName: string, public providerName: string) {
    this.attributes = [];
  }

  public expectAttribute(name: string, type: AttributeType): AttributeConsumer {
    this.attributes.push({ name, type });

    return this;
  }

  public getContract(): Contract {
    return {
      consumer: this.consumerName,
      provider: this.providerName,
      attributes: this.attributes,
    };
  }
}
