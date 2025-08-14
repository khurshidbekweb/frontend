import axios from "axios";
import { BASE_URL_SERVER } from "../constants";

const custimAxios = axios.create({
    baseURL: BASE_URL_SERVER,
    timeout: 10000
});

export default custimAxios;