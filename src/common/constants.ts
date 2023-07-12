export const CONSTANTS = {
  ADMIN_CREDENTIALS: {
    username: "admin",
    passweord: "admin@123",
  },
  SIGNINCONSTANTS: {
    username: "Username is required",

    password: {
      requirePassword: "Password is required",
    },
  },
  Login: {
    SUCCESS: "Login Successful",
    FAILED: "Login Unsuccessfull",
  },
  ROUTING_PATHS: {
    login: "/",
    dashboard: "/dashboard",
  },
  LOCAL_STORAGE_KEYS: {
    TOKEN: "token",
  },
  SHOPS_PAGINATION_FILTER: {
    limit: 10,
    page: 1,
    sort: "",
    search: "",
  },
  FILTER: [{ name: "All" }, { name: "Approved" }, { name: "Not Approved" }],
};
export const RES_CODE = {
  error: {
    badRequest: 400,
    forbidden: 403,
    internalServerError: 500,
    notFound: 404,
    unauthorized: 401,
  },
  success: 200,
};
