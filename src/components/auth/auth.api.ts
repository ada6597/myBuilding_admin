import { CONSTANTS } from "@/common/constants";
import { ISigninPayload } from "./auth.model";
import Toast from "@/common/Toast";

export const signInAPI = async (payload: ISigninPayload) => {
  try {
    if (
      payload.username === CONSTANTS.ADMIN_CREDENTIALS.username &&
      payload.password === CONSTANTS.ADMIN_CREDENTIALS.passweord
    ) {
      return {
        message: CONSTANTS.Login.SUCCESS,
        success: true,
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      };
    } else {
      throw Toast(CONSTANTS.Login.FAILED, { type: "error" });
    }
  } catch (error) {
    throw error;
  }
};
