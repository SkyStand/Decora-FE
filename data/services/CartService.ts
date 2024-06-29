import { AxiosInstance } from 'axios';
import cookies from 'js-cookie';
import instance from '../../helpers/AxiosInstance';
import IinsertCart from '../interface/response/IinsertCart';
import IUpdateCart from '../interface/response/IUpdateCart';
import ICartItems from '../interface/response/ICartItems';

export default class CartService {
    public constructor(
        private readonly axiosInstance: AxiosInstance = instance
    ) { }

    async fetch(): Promise<ICartItems[]> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.get('cart', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data;
    }



    async insert(variant_id: number, data: number): Promise<IinsertCart> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.post(`cart`, { qty: data, variant_id: variant_id }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data;
    }

    async update(variant_id: number, data: number, cart_id: number): Promise<IUpdateCart> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.put(`cart/${cart_id}`, { qty: data, variant_id: variant_id }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data;
    }
}
