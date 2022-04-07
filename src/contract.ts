export interface Contract {
  consumer: string;
  provider: string;
  attributes: Attribute[];
}

export enum AttributeType {
  String,
}

export interface Attribute {
  name: string;
  type: AttributeType;
}
