import { AxiosInstance, AxiosResponse } from 'axios';
import cookies from 'js-cookie'
import instance from '../../helpers/AxiosInstance';
import IProducts from '../interface/response/IProduct';
export default class ProductService {
    public constructor(
        private readonly axiosInstance: AxiosInstance = instance
    ) { }

    async fetch(): Promise<IProducts[]> {
        const token = cookies.get('authToken')
        return (await this.axiosInstance.post('product', null, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data
    }

    // async detail(product_id: number): Promise<IProductDetails> {
    //     const token = cookies.get('authToken')
    //     return (await this.axiosInstance.post(`product/${product_id}`, null, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })).data
    // }
}