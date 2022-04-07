import { AttributeConsumer } from './attributeConsumer'

describe('AttributeConsumer', () => {

    let consumer: AttributeConsumer

    beforeEach(() => {
        consumer = new AttributeConsumer('testConsumer', 'testProvider')
    })

    it('Constructs', () => {
        const consumer = new AttributeConsumer('testConsumer', 'testProvider')

        expect(consumer.consumerName).toBe('testConsumer')
        expect(consumer.providerName).toBe('testProvider')
    })

    it("builds a contract with a consumer and a provider", () => {
        const contract = consumer.getContract()

        expect(contract.consumer).toBe(consumer.consumerName)
        expect(contract.provider).toBe(consumer.providerName)
    })
})
