import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthuser, ISigninPayload } from "./auth.model";
import { LocalStorage } from "@/utils/localstorage";
import { AppState } from "@/redux/store";
import { signInAPI } from "./auth.api";
import { CONSTANTS } from "@/common/constants";
import Toast from "@/common/Toast";

const initialState: IAuthuser = {
  status: "idle",
  userStatus: "idle",
  isUserLoggedIn: false,
};

export const signInAsync = createAsyncThunk(
  "signIn",
  async (payload: ISigninPayload) => {
    try {
      const response = await signInAPI(payload);
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    auth: (state) => {
      return state;
    },
    updateIsLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    updateIsLogout: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.status = "loading";
        state.userStatus = "loading";
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.userStatus = "fulfilled";
        state.isUserLoggedIn = true;
        LocalStorage.setItem(
          CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN,
          action.payload.accessToken as string
        );
        Toast(action.payload.message, { type: "success" });
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.userStatus = "rejected";
      });
  },
});

export default authSlice.reducer;
export const authState = (state: AppState) => state;
export const authAction = authSlice.actions;
