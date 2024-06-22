import { AxiosInstance, AxiosResponse } from 'axios';
import IProduct from '../interface/response/IProduct';
import cookies from 'js-cookie'
import instance from '../../helpers/AxiosInstance';
export default class ProductService {
    public constructor(
        private readonly axiosInstance: AxiosInstance = instance
    ) { }

    async fetch(): Promise<IProduct[]> {
        const token = cookies.get('authToken')
        return (await this.axiosInstance.get('products', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data.data
    }

    async getImagePath(): Promise<string> {
        const token = cookies.get('authToken')
        return (await this.axiosInstance.get('image/product', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data
    }
}