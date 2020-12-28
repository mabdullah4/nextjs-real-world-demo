import { ILogin, IProfile, IRegister, IUser } from "../types/userType";
import instance from "./instance";

const authApi = {
    login: (data: ILogin) => instance.post<IUser>("users/login", data),
    register: (data: IRegister) => instance.post<IUser>("users", data),
    me: (url: string) => instance.get<IProfile>(url),
    profile: (url: string) => instance.get<IProfile>(url),
    update: (data: ILogin) => instance.put<IUser>("user", data),
};

export default authApi;
