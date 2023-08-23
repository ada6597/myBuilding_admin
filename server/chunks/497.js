exports.id = 497;
exports.ids = [497];
exports.modules = {

/***/ 4929:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23))

/***/ }),

/***/ 5857:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9435));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1119));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1613))

/***/ }),

/***/ 7647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _components_auth_authguard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1783);
/* harmony import */ var _components_auth_authguard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_auth_authguard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9675);
/* harmony import */ var _globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2113);
/* harmony import */ var _redux_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4585);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__);





function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_redux_provider__WEBPACK_IMPORTED_MODULE_3__.Providers, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_components_layout_layout__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_components_auth_authguard__WEBPACK_IMPORTED_MODULE_1___default()), {
                        children: children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 1783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\Projects\\MyBuilding_Admin\\Github\\myBuilding_admin\\src\\components\\auth\\authguard.tsx");


/***/ }),

/***/ 4585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\Projects\\MyBuilding_Admin\\Github\\myBuilding_admin\\src\\components\\layout\\layout.tsx");


/***/ }),

/***/ 2113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\Projects\\MyBuilding_Admin\\Github\\myBuilding_admin\\src\\redux\\provider.tsx");


/***/ }),

/***/ 9878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/my_building_logo.3d8c087f.svg","height":50,"width":200});

/***/ }),

/***/ 1574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ CONSTANTS),
/* harmony export */   "z": () => (/* binding */ RES_CODE)
/* harmony export */ });
const CONSTANTS = {
    ADMIN_CREDENTIALS: {
        username: "admin",
        passweord: "admin@123"
    },
    SIGNINCONSTANTS: {
        username: "Username is required",
        password: {
            requirePassword: "Password is required"
        }
    },
    Login: {
        SUCCESS: "Login Successful",
        FAILED: "Login Unsuccessfull"
    },
    ROUTING_PATHS: {
        login: "/",
        dashboard: "/dashboard"
    },
    LOCAL_STORAGE_KEYS: {
        TOKEN: "token"
    },
    SHOPS_PAGINATION_FILTER: {
        limit: 10,
        page: 1,
        sort: "",
        search: ""
    },
    FILTER: [
        {
            name: "All"
        },
        {
            name: "Approved"
        },
        {
            name: "Not Approved"
        }
    ]
};
const RES_CODE = {
    error: {
        badRequest: 400,
        forbidden: 403,
        internalServerError: 500,
        notFound: 404,
        unauthorized: 401
    },
    success: 200
};


/***/ }),

/***/ 7097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vA": () => (/* binding */ authAction),
  "fD": () => (/* binding */ authState),
  "ZP": () => (/* binding */ auth_slice),
  "py": () => (/* binding */ signInAsync)
});

// UNUSED EXPORTS: authSlice

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
// EXTERNAL MODULE: ./src/utils/localstorage.ts
var localstorage = __webpack_require__(8443);
// EXTERNAL MODULE: ./src/common/constants.ts
var constants = __webpack_require__(1574);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(3578);
;// CONCATENATED MODULE: ./src/common/Toast.ts

const Toast = (message, options)=>{
    (0,react_toastify_esm/* toast */.Am)(message, {
        ...options
    });
};
/* harmony default export */ const common_Toast = (Toast);

;// CONCATENATED MODULE: ./src/components/auth/auth.api.ts


const signInAPI = async (payload)=>{
    try {
        if (payload.username === constants/* CONSTANTS.ADMIN_CREDENTIALS.username */.t.ADMIN_CREDENTIALS.username && payload.password === constants/* CONSTANTS.ADMIN_CREDENTIALS.passweord */.t.ADMIN_CREDENTIALS.passweord) {
            return {
                message: constants/* CONSTANTS.Login.SUCCESS */.t.Login.SUCCESS,
                success: true,
                accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            };
        } else {
            throw common_Toast(constants/* CONSTANTS.Login.FAILED */.t.Login.FAILED, {
                type: "error"
            });
        }
    } catch (error) {
        throw error;
    }
};

;// CONCATENATED MODULE: ./src/components/auth/auth.slice.ts





const initialState = {
    status: "idle",
    userStatus: "idle",
    isUserLoggedIn: false
};
const signInAsync = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("signIn", async (payload)=>{
    try {
        const response = await signInAPI(payload);
        return response;
    } catch (error) {
        throw error;
    }
});
const authSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "authSlice",
    initialState,
    reducers: {
        auth: (state)=>{
            return state;
        },
        updateIsLoggedIn: (state, action)=>{
            state.isUserLoggedIn = action.payload;
        },
        updateIsLogout: (state, action)=>{
            state.isUserLoggedIn = action.payload;
        }
    },
    extraReducers (builder) {
        builder.addCase(signInAsync.pending, (state)=>{
            state.status = "loading";
            state.userStatus = "loading";
        }).addCase(signInAsync.fulfilled, (state, action)=>{
            state.status = "fulfilled";
            state.userStatus = "fulfilled";
            state.isUserLoggedIn = true;
            localstorage/* LocalStorage.setItem */.m.setItem(constants/* CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN */.t.LOCAL_STORAGE_KEYS.TOKEN, action.payload.accessToken);
            common_Toast(action.payload.message, {
                type: "success"
            });
        }).addCase(signInAsync.rejected, (state, action)=>{
            state.status = "rejected";
            state.userStatus = "rejected";
        });
    }
});
/* harmony default export */ const auth_slice = (authSlice.reducer);
const authState = (state)=>state;
const authAction = authSlice.actions;


/***/ }),

/***/ 1119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1574);
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8443);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7748);
/* harmony import */ var _auth_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7097);






const Authguard = ({ children  })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const { isUserLoggedIn  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)(_auth_slice__WEBPACK_IMPORTED_MODULE_4__/* .authState */ .fD).auth;
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("isUserLoggedIn", isUserLoggedIn);
        console.log("path", path);
        const isTokenExisting = _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__/* .LocalStorage.getItem */ .m.getItem(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN */ .t.LOCAL_STORAGE_KEYS.TOKEN) ? true : false;
        dispatch(_auth_slice__WEBPACK_IMPORTED_MODULE_4__/* .authAction.updateIsLoggedIn */ .vA.updateIsLoggedIn(isTokenExisting));
        if (isTokenExisting) {
            router.push(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONSTANTS.ROUTING_PATHS.dashboard */ .t.ROUTING_PATHS.dashboard);
        } else {
            router.push(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONSTANTS.ROUTING_PATHS.login */ .t.ROUTING_PATHS.login);
        }
    }, [
        isUserLoggedIn,
        path
    ]);
    return children;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authguard);


/***/ }),

/***/ 3889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ shopData_slice),
  "kT": () => (/* binding */ deleteshopAsync),
  "ED": () => (/* binding */ getShopsAsync),
  "cf": () => (/* binding */ shopsState),
  "nu": () => (/* binding */ updateShopsAsync)
});

// UNUSED EXPORTS: shopAction, shopsSlice

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
// EXTERNAL MODULE: ./src/components/auth/auth.slice.ts + 2 modules
var auth_slice = __webpack_require__(7097);
// EXTERNAL MODULE: ./src/redux/store.ts
var store = __webpack_require__(7748);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(248);
// EXTERNAL MODULE: ./src/common/constants.ts
var constants = __webpack_require__(1574);
// EXTERNAL MODULE: ./src/utils/localstorage.ts
var localstorage = __webpack_require__(8443);
;// CONCATENATED MODULE: ./src/common/axios-interceptor.ts





const axiosInstance = axios/* default.create */.Z.create({
    baseURL: "https://bc5d-122-179-138-114.ngrok-free.app"
});
axiosInstance.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    const { config , response  } = error;
    if (response && response?.status === constants/* RES_CODE.error.unauthorized */.z.error.unauthorized) {
        store/* default.dispatch */.ZP.dispatch(auth_slice/* authAction.updateIsLoggedIn */.vA.updateIsLoggedIn(false));
        localstorage/* LocalStorage.removeItem */.m.removeItem("token");
    }
    return Promise.reject(error);
});

;// CONCATENATED MODULE: ./src/components/dashboard/shopData.api.ts

const shopAPI = async (params)=>{
    try {
        const response = await axiosInstance({
            method: "get",
            params,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "User-Agent": "*",
                "ngrok-skip-browser-warning": "*"
            },
            url: `${"https://bc5d-122-179-138-114.ngrok-free.app"}/building`
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
const updateShopAPI = async (payload)=>{
    try {
        const response = await axiosInstance({
            method: "patch",
            data: payload,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "User-Agent": "*",
                "ngrok-skip-browser-warning": "*"
            },
            url: `${"https://bc5d-122-179-138-114.ngrok-free.app"}/building/${payload._id}`
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
const deleteShopAPI = async (id)=>{
    try {
        const response = await axiosInstance({
            method: "delete",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "User-Agent": "*",
                "ngrok-skip-browser-warning": "*"
            },
            url: `${"https://bc5d-122-179-138-114.ngrok-free.app"}/building/${id}`
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

;// CONCATENATED MODULE: ./src/components/dashboard/shopData.slice.ts



const initialState = {
    total: 0,
    currentPage: 0,
    perPage: 0,
    totalPages: 0,
    shops: [],
    getShopDataStatus: false,
    isShopDeleted: false,
    shopDeleted: ""
};
//get shop data from getShopsAsync
const getShopsAsync = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("get/shops", async (params)=>{
    try {
        const response = await shopAPI(params);
        return response;
    } catch (error) {
        throw error;
    }
});
//update shop data from
const updateShopsAsync = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("update/shops", async (payload, { dispatch  })=>{
    try {
        const response = await updateShopAPI(payload);
        dispatch(getShopsAsync(constants/* CONSTANTS.SHOPS_PAGINATION_FILTER */.t.SHOPS_PAGINATION_FILTER));
        return response;
    } catch (error) {
        throw error;
    }
});
const deleteshopAsync = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("delete/shops", async (payload, { dispatch  })=>{
    try {
        const response = await deleteShopAPI(payload);
        dispatch(getShopsAsync(constants/* CONSTANTS.SHOPS_PAGINATION_FILTER */.t.SHOPS_PAGINATION_FILTER));
        return response;
    } catch (error) {
        throw error;
    }
});
const shopsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "shop",
    initialState,
    reducers: {
        shops: (state)=>{
            return state;
        }
    },
    extraReducers (builder) {
        builder.addCase(getShopsAsync.pending, (state)=>{
            state.getShopDataStatus = false;
        }).addCase(getShopsAsync.fulfilled, (state, action)=>{
            state.getShopDataStatus = true;
            state.shops = action.payload.data;
            state.total = action.payload.total;
            state.currentPage = action.payload.currentPage;
            state.perPage = action.payload.perPage;
            state.totalPages = action.payload.totalPages;
        }).addCase(getShopsAsync.rejected, (state)=>{
            state.getShopDataStatus = false;
        }).addCase(updateShopsAsync.pending, (state)=>{
            state.getShopDataStatus = false;
        }).addCase(updateShopsAsync.fulfilled, (state, action)=>{
            state.getShopDataStatus = true;
            state.shops = action.payload.data;
        }).addCase(updateShopsAsync.rejected, (state)=>{
            state.getShopDataStatus = false;
        }).addCase(deleteshopAsync.pending, (state)=>{
            state.isShopDeleted = false;
        }).addCase(deleteshopAsync.fulfilled, (state, action)=>{
            state.isShopDeleted = true;
            state.shopDeleted = action.payload.data;
        }).addCase(deleteshopAsync.rejected, (state)=>{
            state.isShopDeleted = false;
        });
    }
});
/* harmony default export */ const shopData_slice = (shopsSlice.reducer);
const shopsState = (state)=>state;
const shopAction = shopsSlice.actions;


/***/ }),

/***/ 1613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./src/utils/localstorage.ts
var localstorage = __webpack_require__(8443);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/my_building_logo.svg
var my_building_logo = __webpack_require__(9878);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.tsx






const Navbar = ()=>{
    //for router
    const router = (0,navigation.useRouter)();
    //Logout
    const handleLogout = ()=>{
        localstorage/* LocalStorage.clearLocalStorage */.m.clearLocalStorage();
        router.push("/");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "bg-seashell fixed w-full z-20 top-0 left-0 border-b-2 border-Lavender_Pinocchio",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap items-center justify-between mx-auto m-3 px-14",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: my_building_logo/* default */.Z,
                        alt: "my_building_logo",
                        height: 40,
                        width: 150
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex md:order-2 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "text-lavared bg-white border border-lavared font-medium rounded-lg text-sm px-4 py-2 text-center w-[160px] h-[46px] ",
                            onClick: ()=>{
                                handleLogout();
                            },
                            children: "Logout"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./src/redux/store.ts
var store = __webpack_require__(7748);
// EXTERNAL MODULE: ./src/components/auth/auth.slice.ts + 2 modules
var auth_slice = __webpack_require__(7097);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(8059);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
;// CONCATENATED MODULE: ./src/components/layout/layout.tsx






const Layout = ({ children  })=>{
    const { isUserLoggedIn  } = (0,store/* useAppSelector */.CG)(auth_slice/* authState */.fD).auth;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((noop_head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "admin_mybuilding"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: isUserLoggedIn ? "h-screen content bg-seashell" : "",
                children: [
                    isUserLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx(navbar_Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: isUserLoggedIn ? "bg-seashell p-5   break-words" : "",
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 9435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Providers": () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7748);



function Providers({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        children: children
    });
}


/***/ }),

/***/ 7748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CG": () => (/* binding */ useAppSelector),
/* harmony export */   "TL": () => (/* binding */ useAppDispatch),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_auth_auth_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7097);
/* harmony import */ var _components_dashboard_shopData_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3889);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);




const makeStore = ()=>{
    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
        reducer: {
            auth: _components_auth_auth_slice__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP,
            shop: _components_dashboard_shopData_slice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
        }
    });
};
//Creating store
const store = makeStore();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;


/***/ }),

/***/ 8443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
    static setItem(key, value) {
        localStorage.setItem(key, value);
    }
    static getItem(key) {
        return localStorage.getItem(key);
    }
    static removeItem(key) {
        return localStorage.removeItem(key);
    }
    static clearLocalStorage() {
        return localStorage.clear();
    }
}


/***/ }),

/***/ 9675:
/***/ (() => {



/***/ })

};
;