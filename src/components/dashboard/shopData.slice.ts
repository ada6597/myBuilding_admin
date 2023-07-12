import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteShopAPI, shopAPI, updateShopAPI } from "./shopData.api";
import { IGetShopPayload, IShops, IShopsData } from "./shopData.modal";
import { AppState } from "@/redux/store";
import { IAxiosError } from "@/utils/utils";
import { CONSTANTS } from "@/common/constants";

const initialState: IShops = {
  total: 0,
  currentPage: 0,
  perPage: 0,
  totalPages: 0,
  shops: [],
  getShopDataStatus: false,
  isShopDeleted: false,
  shopDeleted: "",
};
//get shop data from getShopsAsync
export const getShopsAsync = createAsyncThunk(
  "get/shops",
  async (params: IGetShopPayload) => {
    try {
      const response = await shopAPI(params);
      return response;
    } catch (error: unknown) {
      throw error as IAxiosError;
    }
  }
);
//update shop data from
export const updateShopsAsync = createAsyncThunk(
  "update/shops",
  async (payload: IShopsData, { dispatch }) => {
    try {
      const response = await updateShopAPI(payload);
      dispatch(getShopsAsync(CONSTANTS.SHOPS_PAGINATION_FILTER));
      return response;
    } catch (error: unknown) {
      throw error as IAxiosError;
    }
  }
);

export const deleteshopAsync = createAsyncThunk(
  "delete/shops",
  async (payload: string, { dispatch }) => {
    try {
      const response = await deleteShopAPI(payload);
      dispatch(getShopsAsync(CONSTANTS.SHOPS_PAGINATION_FILTER));
      return response;
    } catch (error: unknown) {
      throw error as IAxiosError;
    }
  }
);
export const shopsSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    shops: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getShopsAsync.pending, (state) => {
        state.getShopDataStatus = false;
      })
      .addCase(getShopsAsync.fulfilled, (state, action) => {
        state.getShopDataStatus = true;
        state.shops = action.payload.data;
        state.total = action.payload.total;
        state.currentPage = action.payload.currentPage;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
      })

      .addCase(getShopsAsync.rejected, (state) => {
        state.getShopDataStatus = false;
      })
      .addCase(updateShopsAsync.pending, (state) => {
        state.getShopDataStatus = false;
      })
      .addCase(updateShopsAsync.fulfilled, (state, action) => {
        state.getShopDataStatus = true;
        state.shops = action.payload.data;
      })
      .addCase(updateShopsAsync.rejected, (state) => {
        state.getShopDataStatus = false;
      })
      .addCase(deleteshopAsync.pending, (state) => {
        state.isShopDeleted = false;
      })
      .addCase(deleteshopAsync.fulfilled, (state, action) => {
        state.isShopDeleted = true;
        state.shopDeleted = action.payload.data;
      })
      .addCase(deleteshopAsync.rejected, (state) => {
        state.isShopDeleted = false;
      });
  },
});
export default shopsSlice.reducer;
export const shopsState = (state: AppState) => state;
export const shopAction = shopsSlice.actions;
