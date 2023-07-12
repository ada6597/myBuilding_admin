"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { CONSTANTS } from "@/common/constants";
import { LocalStorage } from "@/utils/localstorage";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { authAction, authState } from "./auth.slice";

interface IProps {
  children: ReactNode;
}

const Authguard: React.FC<IProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isUserLoggedIn } = useAppSelector(authState).auth;
  const path = usePathname();

  useEffect(() => {
    console.log("isUserLoggedin---", isUserLoggedIn);

    const isTokenExisting: boolean = LocalStorage.getItem(
      CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN
    )
      ? true
      : false;
    dispatch(authAction.updateIsLoggedIn(isTokenExisting));
    if (isTokenExisting) {
      if (path === CONSTANTS.ROUTING_PATHS.login) {
        router.push(CONSTANTS.ROUTING_PATHS.dashboard);
      }
    } else {
      router.push(CONSTANTS.ROUTING_PATHS.login);
      LocalStorage.clearLocalStorage();
    }
  }, [isUserLoggedIn, path]);

  return children;
};

export default Authguard;
