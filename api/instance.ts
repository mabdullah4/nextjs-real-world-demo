import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { IServerError } from "../types/errorType";

axios.defaults = {
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
    },
};

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const user = localStorage.getItem("user");

    if (user) {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: JSON.parse(user).token,
            },
        };
    }
    return config;
});

axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<IServerError>) => error.response?.data.errors
);

export default axios;
