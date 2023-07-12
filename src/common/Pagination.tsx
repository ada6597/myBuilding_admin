import React from "react";
import Image from "next/image";
import LeftArrowIcon from "../../public/ArrowLeftIconVector.svg";
import RightArrowIcon from "../../public/ArrowRightIconVector.svg";

interface IPaginationProps {
  totalPage: number;
  onPageChange: (page: number) => void;
  activePage: number;
}
const Pagination: React.FC<IPaginationProps> = ({
  totalPage,
  onPageChange,
  activePage = 1,
}) => {
  return (
    <React.Fragment>
      <div className="flex items-center px-8 mx-11">
        <button
          type="button"
          className="  rounded-xl justify-center focus:ring-4 focus:ring-blue-300 px-3 py-2  "
          onClick={() => {
            activePage = activePage - 1;
            onPageChange(activePage);
          }}
          disabled={activePage <= 1}
        >
          <Image src={LeftArrowIcon} alt="right-arrow-icon" />
        </button>
        <div className="flex justify-center items-center">
          <span className="px-2 py-2 text-gray-700 rounded-md">
            {activePage} - {totalPage}
          </span>
        </div>
        <button
          type="button"
          className="rounded-xl	 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-2  "
          onClick={() => {
            activePage = activePage + 1;
            onPageChange(activePage);
          }}
          disabled={activePage === totalPage}
        >
          <Image src={RightArrowIcon} alt="right-arrow-icon" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
