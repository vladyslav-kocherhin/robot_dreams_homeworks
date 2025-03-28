import path from 'path';
import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { expect } from 'chai';
import axios from 'axios';
import fs from 'fs';

const { like } = MatchersV3;

const provider = new PactV3({
    consumer: 'Store-Web-v3',
    provider: 'Store-API-v3',
    dir: path.resolve(process.cwd(), 'pacts')
});

const orderExample = {
    id: 1234,
    petId: 5678,
    quantity: 1,
    shipDate: '2025-03-28T12:00:00.000Z',
    status: 'placed',
    complete: true
};

describe('PactV3 Store Order - POST /store/order', () => {

    before(() => {
        const pactFile = path.resolve(process.cwd(), 'pacts/Store-Web-v3-Store-API-v3.json');
        if (fs.existsSync(pactFile)) {
            fs.rmSync(pactFile);
        }
    });

    it('should successfully place an order', () => {
        provider
            .given('order can be placed')
            .uponReceiving('a request to place a new order')
            .withRequest({
                method: 'POST',
                path: '/v2/store/order',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: orderExample
            })
            .willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(orderExample)
            });

        return provider.executeTest(async (mockServer) => {
            const response = await axios.post(`${mockServer.url}/v2/store/order`, orderExample, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            });

            expect(response.status).to.equal(200);
            expect(response.data).to.deep.equal(orderExample);
        });
    });
});
