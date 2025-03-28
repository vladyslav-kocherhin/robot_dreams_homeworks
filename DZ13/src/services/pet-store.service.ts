import axios, { AxiosPromise } from 'axios';
import { OrderDto } from '../models/catapi.dto';

export class StoreOrderService {
    public constructor(private url: string) {}

    public placeOrder = (order: OrderDto): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            method: 'POST',
            url: '/v2/store/order',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: order
        });
    };

    public getOrder = (id: number): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            method: 'GET',
            url: `/v2/store/order/${id}`,
            headers: {
                Accept: 'application/json'
            }
        });
    };
}
