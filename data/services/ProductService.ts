import { AxiosInstance } from 'axios';
import cookies from 'js-cookie';
import instance from '../../helpers/AxiosInstance';
import IProductDetails from '../interface/response/IProductDetails';
import ICartItems from '../interface/response/ICartItems';
import IProduct from '../interface/response/IProduct';

export default class ProductService {
    public constructor(
        private readonly axiosInstance: AxiosInstance = instance
    ) { }

    async fetch(): Promise<IProduct[]> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.get('products', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data.data;
    }

    async detail(product_id: number): Promise<IProductDetails> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.get(`products/${product_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data.data;
    }

    async getCartItems(): Promise<ICartItems[]> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.post('cart', null, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data;
    }

    async getImagePath(): Promise<string> {
        const token = cookies.get('authToken');
        return (await this.axiosInstance.get('image/product', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data;
    }
}
