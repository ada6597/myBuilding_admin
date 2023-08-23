"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 6310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6135);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7748);
/* harmony import */ var _auth_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7097);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1574);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8952);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_my_building_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9878);










const Login = ()=>{
    const dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const initialValues = {
        username: "",
        password: ""
    };
    const signInSchema = yup__WEBPACK_IMPORTED_MODULE_7__/* .object */ .Ry().shape({
        username: yup__WEBPACK_IMPORTED_MODULE_7__/* .string */ .Z_().required(_common_constants__WEBPACK_IMPORTED_MODULE_6__/* .CONSTANTS.SIGNINCONSTANTS.username */ .t.SIGNINCONSTANTS.username).trim(),
        password: yup__WEBPACK_IMPORTED_MODULE_7__/* .string */ .Z_().required(_common_constants__WEBPACK_IMPORTED_MODULE_6__/* .CONSTANTS.SIGNINCONSTANTS.password.requirePassword */ .t.SIGNINCONSTANTS.password.requirePassword).trim()
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values)=>{
            const trimmedValue = signInSchema.cast(values);
            const { username , password  } = trimmedValue;
            const payload = {
                username,
                password
            };
            dispatch((0,_auth_slice__WEBPACK_IMPORTED_MODULE_5__/* .signInAsync */ .py)(payload));
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-seashell min-h-screen flex flex-col ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-2/5 mx-auto flex-1 flex flex-col items-center justify-center px-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white mx-auto w-full shadow-md text-cinder",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-24 justify-center items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    src: _public_my_building_logo_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                    alt: "my_building_logo",
                                    height: "45"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-2xl mt-10 text-left font-bold",
                                    children: "Login"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-2 mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-cinder",
                                            children: "User name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                            type: "text",
                                            className: "block border border-grey-light w-full p-3 rounded mb-4 h-[54px]",
                                            name: "username",
                                            placeholder: "Username"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
                                            name: "username",
                                            component: "div",
                                            className: "text-red-500 ml-1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-cinder",
                                            children: "Password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                            type: "password",
                                            className: "block border border-grey-light w-full p-3 rounded mb-4",
                                            name: "password",
                                            placeholder: "Password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
                                            name: "password",
                                            component: "div",
                                            className: "text-red-500 ml-1"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "w-full h-14 text-center py-3 rounded bg-sunglow text-white my-1",
                                    children: "Login"
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

};
;