import instance from "../../helpers/AxiosInstance";
import ILogin from "../interface/request/ILogin";
import { AxiosInstance } from "axios";
import IToken from "../interface/response/IToken";
import IAuth from "../interface/response/IAuth";
import IRegister from "../interface/request/IRegister";
export default class AuthService {
    public constructor(
        private readonly axiosInstance: AxiosInstance = instance
    ) { }
    async regis(data: IRegister): Promise<IAuth> {
        return (await this.axiosInstance.post('register', data)).data
    }
    async login(data: ILogin): Promise<IToken> {
        return (await this.axiosInstance.post('login', data)).data
    }
}