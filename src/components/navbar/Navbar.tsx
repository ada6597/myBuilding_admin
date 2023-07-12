import { LocalStorage } from "@/utils/localstorage";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import mybuildinglogo from "../../../public/my_building_logo.svg";

const Navbar = () => {
  //for router
  const router = useRouter();
  //Logout
  const handleLogout = () => {
    LocalStorage.clearLocalStorage();
    router.push("/");
  };
  return (
    <React.Fragment>
      <nav className="bg-seashell fixed w-full z-20 top-0 left-0 border-b-2 border-Lavender_Pinocchio">
        <div className="flex flex-wrap items-center justify-between mx-auto m-3 px-14">
          <Image
            src={mybuildinglogo}
            alt={"my_building_logo"}
            height={40}
            width={150}
          />
          <div className="flex md:order-2 ">
            <button
              type="button"
              className="text-lavared bg-white border border-lavared font-medium rounded-lg text-sm px-4 py-2 text-center w-[160px] h-[46px] "
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
