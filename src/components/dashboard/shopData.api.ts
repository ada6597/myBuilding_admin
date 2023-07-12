import { axiosInstance } from "@/common/axios-interceptor";
import { IGetShopPayload, IShopsData } from "./shopData.modal";

export const shopAPI = async (params: IGetShopPayload) => {
  try {
    const response = await axiosInstance({
      method: "get",
      params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "User-Agent": "*",
        "ngrok-skip-browser-warning": "*",
      },
      url: `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/building`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateShopAPI = async (payload: IShopsData) => {
  try {
    const response = await axiosInstance({
      method: "patch",
      data: payload,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "User-Agent": "*",
        "ngrok-skip-browser-warning": "*",
      },
      url: `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/building/${payload._id}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteShopAPI = async (id: string) => {
  try {
    const response = await axiosInstance({
      method: "delete",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "User-Agent": "*",
        "ngrok-skip-browser-warning": "*",
      },
      url: `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/building/${id}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
