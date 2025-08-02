// src/utils/axios.js
import axios from "axios";
import { base_url } from "../config";

const api = axios.create({
    baseURL: base_url, // FastAPI backend
    withCredentials: true, // IMPORTANT for cookies
});

export default api;
