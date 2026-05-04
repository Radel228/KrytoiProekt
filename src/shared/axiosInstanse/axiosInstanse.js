import axios from "axios"
import { UserStorage } from "../UserStorage/UserStorage"

export const AxiosInstance = axios.create({
    baseURL: "http://localhost:3010/",
    headers: {
        "Content-Type": "application/json"
    }
})


AxiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = UserStorage.getAccessToken()
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    }
)

AxiosInstance.interceptors.response.use(
    req => req,
    (error) => {
        const conf = error.config
        const refreshToken = UserStorage.getRefreshToken()
        if (error.status === 401) {
            const { data } = AxiosInstance.get('auth/refresh', { refreshToken })
            UserStorage.setAccessToken(data.accessToken)
        }
        return AxiosInstance(conf)
    }
)