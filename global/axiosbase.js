import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.serverUrl}/api`,
});

export default instance;