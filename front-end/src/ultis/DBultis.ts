import axios from "axios";
import baseAxios from "../configs/axios.config";

export const getData = async (resource: string) => {
  try {
    const response = await axios.get(baseAxios + resource);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const postData = async (resource: string, data: any) => {
  try {
    const response = await axios.post(baseAxios + resource, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const putData = async (resource: string, data: any) => {
  try {
    const response = await axios.put(baseAxios + resource, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteData = async (resource: string, id: any) => {
  try {
    const response = await axios.delete(baseAxios + resource + `/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
