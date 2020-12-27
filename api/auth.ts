import { ILogin, IRegister } from "../types/userType";
import instance from "./instance";

const authApi = {
    login: (url: string, data: ILogin) => instance.post(url, data),
    register: (url: string, data: IRegister) => instance.post(url, data),
    me: (url: string) => instance.get(url),
    profile: (url: string) => instance.get(url),
    update: (url: string, data: ILogin) => instance.put(url, data),
};

export default authApi;
