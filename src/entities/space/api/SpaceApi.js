import { AxiosInstance } from "../../../shared/axiosInstanse/axiosInstanse";

export default class SpaceApi {
    static async getSpace() {
        const response = await AxiosInstance.get("/spaces")
        return response.data
    }
}