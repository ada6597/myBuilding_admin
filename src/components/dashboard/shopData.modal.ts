export interface IShopsData {
  _id: string;
  name: string;
  address: string;
  city: string;
  location: {
    lat: string;
    long: string;
  };
  is_approved: boolean;
}
export interface IGetShopPayload {
  search: string;
  page: number;
  limit: number;
  sort: string;
  is_approved?: boolean;
}

export interface IShops {
  total: number;
  currentPage: number;
  perPage: number;
  totalPages: number;
  shops: IShopsData[];
  getShopDataStatus: boolean;
  isShopDeleted: boolean;
  shopDeleted: string;
}
