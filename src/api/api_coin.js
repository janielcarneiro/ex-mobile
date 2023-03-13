import axios from "axios";

const api_coin = axios.create({
    baseURL: "https://brapi.dev/api/v2"
})

export default api_coin;