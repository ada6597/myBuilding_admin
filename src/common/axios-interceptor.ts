import { authAction } from "@/components/auth/auth.slice";
import store from "@/redux/store";
import axios from "axios";
import { RES_CODE } from "./constants";
import { LocalStorage } from "@/utils/localstorage";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_ENDPOINT,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const { config, response } = error;
    if (response && response?.status === RES_CODE.error.unauthorized) {
      store.dispatch(authAction.updateIsLoggedIn(false));
      LocalStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);
