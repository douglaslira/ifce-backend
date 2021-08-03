import { expect } from 'chai';
import app from '../src/app';
import { agent as request } from 'supertest';

describe("Customer test", () => {

    it('should GET /customer', async function () {
        const res = await request(app).get('/customer');
        expect(res.status).to.equals(200);
        expect(res.body).to.be.an("array");
    });

    it('should POST /customer', async function () {
        const res = await request(app).post('/customer').send({name: 'DOUGLAS LIRAAA'});
        expect(res.status).to.equals(200);
    });

    it('should PUT /customer', async function () {
        const res = await request(app).put('/customer').send({_id: '6108aa08a50b02126dce1e62', name: 'DOUGLAS LIRA 06'});
        expect(res.status).to.equals(200);
    });

    it('should DELETE /customer', async function () {
        const res = await request(app).delete('/customer?_id=6108ac213d68de225b49ab1d');
        expect(res.status).to.equals(200);
    });

});