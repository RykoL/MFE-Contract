import { AttributeConsumer } from "./attributeConsumer";
import { AttributeType } from "./contract";

describe("AttributeConsumer", () => {
  let consumer: AttributeConsumer;

  beforeEach(() => {
    consumer = new AttributeConsumer("testConsumer", "testProvider");
  });

  it("Constructs", () => {
    const consumer = new AttributeConsumer("testConsumer", "testProvider");

    expect(consumer.consumerName).toBe("testConsumer");
    expect(consumer.providerName).toBe("testProvider");
  });

  it("builds a contract with a consumer and a provider", () => {
    const contract = consumer.getContract();

    expect(contract.consumer).toBe(consumer.consumerName);
    expect(contract.provider).toBe(consumer.providerName);
  });

  it("adds an attribute to the contract", () => {
    consumer.expectAttribute("id", AttributeType.String);

    const contract = consumer.getContract();

    expect(contract.attributes).toHaveLength(1);
    expect(contract.attributes[0]).toStrictEqual({
      name: "id",
      type: AttributeType.String,
    });
  });
});
