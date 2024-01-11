import axios from "axios";
const baseAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export default baseAxios;
