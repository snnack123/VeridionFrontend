import axios from "axios";
import { ILoginReqDto, ICompanySearchDto } from "../interfaces";
import { API_ROUTES } from "./routes";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/',
});

export const API = {
    auth: {
        login: (data: ILoginReqDto) => axiosInstance.post(API_ROUTES.auth.login, data),
        register: (data: ILoginReqDto) => axiosInstance.post(API_ROUTES.auth.register, data),
        check: (token: string) => axiosInstance.get(API_ROUTES.auth.check, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    },
    company: {
        getCompany: (data: ICompanySearchDto, token: string) => axiosInstance.post(API_ROUTES.company.get, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
        getReviews: (companyName: string, token: string) => axiosInstance.get(API_ROUTES.company.reviews(companyName), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    }
}