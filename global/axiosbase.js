import axios from "axios";

const instance = axios.create({
  baseURL: process.env.serverUrl,
});

export default instance;