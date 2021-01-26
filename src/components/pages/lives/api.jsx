import axios from "axios";

const api = axios.create({
    baseURL: "/lives"
});

export default api