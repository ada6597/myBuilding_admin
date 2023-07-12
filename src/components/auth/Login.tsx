"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { ISigninPayload } from "./auth.model";
import { signInAsync } from "./auth.slice";
import { CONSTANTS } from "@/common/constants";
import * as Yup from "yup";
import Image from "next/image";
import mybuildinglogo from "../../../public/my_building_logo.svg";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const initialValues: ISigninPayload = {
    username: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    username: Yup.string().required(CONSTANTS.SIGNINCONSTANTS.username).trim(),
    password: Yup.string()
      .required(CONSTANTS.SIGNINCONSTANTS.password.requirePassword)
      .trim(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values: any) => {
        const trimmedValue = signInSchema.cast(values);
        const { username, password } = trimmedValue;
        const payload: ISigninPayload = {
          username,
          password,
        };
        dispatch(signInAsync(payload));
      }}
    >
      <Form>
        <div className="bg-seashell min-h-screen flex flex-col ">
          <div className="w-2/5 mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white mx-auto w-full shadow-md text-cinder">
              <div className="p-24 justify-center items-center">
                <Image
                  src={mybuildinglogo}
                  alt={"my_building_logo"}
                  height="45"
                />
                <h1 className="text-2xl mt-10 text-left font-bold">Login</h1>
                <div className="mb-2 mt-5">
                  <label className="text-cinder">User name</label>
                  <Field
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 h-[54px]"
                    name="username"
                    placeholder="Username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 ml-1"
                  />
                  <label className="text-cinder">Password</label>
                  <Field
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 ml-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 text-center py-3 rounded bg-sunglow text-white my-1"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default Login;
