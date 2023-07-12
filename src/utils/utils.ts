import { CONSTANTS } from "@/common/constants";
import { LocalStorage } from "./localstorage";

export interface IAxiosError {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
}
export class Utils {
  public static handleError = (error: string | string[]) => {
    return typeof error === "string" ? error : error[0];
  };
  public static getToken = () => {
    return LocalStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN);
  };
}
