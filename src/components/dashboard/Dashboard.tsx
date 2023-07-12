"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import { IGetShopPayload, IShopsData } from "./shopData.modal";
import { CONSTANTS } from "@/common/constants";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  deleteshopAsync,
  getShopsAsync,
  shopsState,
  updateShopsAsync,
} from "./shopData.slice";
import Image from "next/image";
import Pagination from "@/common/Pagination";
import info from "../../../public/info.svg";
import searchSvg from "../../../public/search.svg";
import dropdownSvg from "../../../public/dropdown.svg";
import deleteSvg from "../../../public/trash.svg";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { shops, totalPages } = useAppSelector(shopsState).shop;

  //pagination params
  const [paginationParams, setPaginationParams] = useState<IGetShopPayload>(
    CONSTANTS.SHOPS_PAGINATION_FILTER
  );
  // for dialog info
  const [isOpen, setIsOpen] = useState(false);

  //for shop data

  const [selectShop, setSelectedShop] = useState<IShopsData>({
    _id: "",
    name: "",
    address: "",
    city: "",
    location: {
      lat: "",
      long: "",
    },
    is_approved: false,
  });

  //for Confirmation Dialog toggle
  const [approveModal, setToggleModal] = useState({
    id: "",
    isToggleModalOpen: false,
  });
  const [approveDeleteModal, setDeleteModal] = useState({
    id: "",
    isDeleteModalOpen: false,
  });

  //for searchfield
  const [value, setValue] = useState("");

  const [selected, setSelected] = useState(CONSTANTS.FILTER[0]);

  // dispatching shop api for data
  useEffect(() => {
    dispatch(getShopsAsync(paginationParams));
  }, [paginationParams]);

  const getShops = (searchValue: string) => {
    const paramPayload: IGetShopPayload = {
      ...paginationParams,
      page: 1,
      search: searchValue,
      sort: "",
    };
    setPaginationParams(paramPayload);
  };

  //Clicking on info button
  const handleInfoClick = (data: React.SetStateAction<IShopsData>) => {
    setIsOpen(true);
    setSelectedShop(data);
  };

  //for handling toggle
  const handleToggle = (id: string) => {
    const toggleShop = shops.find((shop) => {
      return shop._id === id;
    });
    if (toggleShop) {
      const updatedShop = {
        ...toggleShop,
        is_approved: !toggleShop.is_approved,
      };
      const updatePayload: IShopsData = {
        _id: updatedShop?._id,
        name: updatedShop?.name,
        address: updatedShop?.address,
        city: updatedShop?.city,
        is_approved: updatedShop.is_approved,
        location: {
          lat: updatedShop?.location.lat,
          long: updatedShop?.location.long,
        },
      };

      dispatch(updateShopsAsync(updatePayload));
    }
  };

  //for Delete Shop
  const handleDeleteShop = (id: string) => {
    const deleteShop = shops.find((shop) => {
      return shop._id === id;
    });
    dispatch(deleteshopAsync(deleteShop?._id!));
  };

  //For search field
  const handleSearchField = () => {
    console.log("Search butoon clicked", value);
  };

  return (
    <React.Fragment>
      {/* Search textfield */}
      <div className=" flex flex-row mx-8">
        <div className="flex items-center rounded-md bg-white">
          <input
            type="search"
            className="relative block rounded-l p-4 text-sm text-cinder  bg-white w-[500px] h-14"
            placeholder="Search"
            aria-label="Search"
            value={paginationParams.search}
            onChange={(e) => {
              const value = e.target.value.trim();
              getShops(value);
            }}
          />
          <Image src={searchSvg} alt="searchIcon" className="m-3" />
        </div>

        {/* select for filter */}
        <Listbox
          as="div"
          className="relative inline-block ml-5"
          value={selected}
          onChange={(value) => {
            switch (value.name) {
              case "All":
                const payloadAll = {
                  ...paginationParams,
                };
                delete payloadAll.is_approved;
                setSelected(CONSTANTS.FILTER[0]);
                setPaginationParams(payloadAll);
                break;
              case "Approved":
                const payloadApproved = {
                  ...paginationParams,
                  is_approved: true,
                };
                setSelected(CONSTANTS.FILTER[1]);
                setPaginationParams(payloadApproved);
                break;
              case "Not Approved":
                const payloadNotApproved = {
                  ...paginationParams,
                  is_approved: false,
                };
                setSelected(CONSTANTS.FILTER[2]);
                setPaginationParams(payloadNotApproved);
                break;
            }
          }}
        >
          <Listbox.Button className="relative w-72 cursor-default text-cinder bg-white font-medium rounded-md text-sm inline-flex items-center p-4 h-[57px]">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
              <Image
                src={dropdownSvg}
                alt={"dropdown svg"}
                height="10"
                width="10"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg">
              {CONSTANTS.FILTER.map((filterData, index) => (
                <Listbox.Option
                  key={`Filter ${index}`}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-seashell text-red-500" : "text-gray-900"
                    }`
                  }
                  value={filterData}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {filterData.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>

      {/* Table Component */}
      <div className=" overflow-x-auto px-8 mt-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-mistblue uppercase ">
            <tr>
              <th scope="col" className="p-4">
                Building Name
              </th>
              <th scope="col" className="p-4">
                Address
              </th>
              <th scope="col" className="p-4">
                Status
              </th>
              <th scope="col" className="p-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(shops) &&
              shops.map((data: IShopsData, index: any) => {
                return (
                  <tr
                    key={`tableRow ${index}`}
                    className="bg-white border-b border-iron"
                  >
                    <td
                      scope="row"
                      className="pl-4 text-cinder whitespace-nowrap"
                    >
                      {data.name}
                    </td>

                    <td className=" text-cinder">
                      <div className="flex items-center">
                        <Image
                          src={info}
                          alt="Info Logo"
                          height="20"
                          width="20"
                          onClick={() => {
                            handleInfoClick(data);
                          }}
                          className="mr-3 justify-center items-center"
                        />
                        <div>
                          {data.address}, {data.city}
                        </div>
                      </div>
                    </td>

                    <td className="pl-4 text-black">
                      <label className="relative inline-flex items-center mr-5 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          checked={data.is_approved}
                          onChange={() => {
                            setToggleModal({
                              id: data._id,
                              isToggleModalOpen: true,
                            });
                          }}
                        />
                        <div className="w-11 h-6 bg-seashell rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                      </label>
                    </td>

                    <td className=" text-cinder">
                      <button
                        type="button"
                        className=" rounded-lg px-5 py-2.5 mr-2 mb-2 justify-center items-center"
                        onClick={() => {
                          setDeleteModal({
                            id: data._id,
                            isDeleteModalOpen: true,
                          });
                        }}
                      >
                        <Image
                          src={deleteSvg}
                          alt={"delete icon"}
                          height="20"
                          width="25"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {/* Dialof for info */}
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className=" text-center  sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-cinder"
                        >
                          Building Information
                        </Dialog.Title>
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-4 text-sm text-cinder">
                            <label>Name</label>

                            <div>{selectShop.name}</div>

                            <label>Address</label>

                            <div>{selectShop.address}</div>

                            <label>City</label>

                            <div>{selectShop.city}</div>

                            <label>Location</label>

                            <div>
                              lat : {selectShop.location.lat}
                              <br />
                              long : {selectShop.location.long}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-seashell  px-4 py-3 ">
                      <button
                        type="button"
                        className="border-2 border-lavared text-lavared mt-0 inline-flex w-auto justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold  shadow-sm "
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* dialog for toggle */}
        <Transition.Root as={Fragment} show={approveModal.isToggleModalOpen}>
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Are you Sure
                          </Dialog.Title>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => {
                          handleToggle(approveModal.id);
                          setToggleModal({
                            id: "",
                            isToggleModalOpen: false,
                          });
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => {
                          setToggleModal({
                            id: "",
                            isToggleModalOpen: false,
                          });
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* dialog for delete */}
        <Transition.Root
          as={Fragment}
          show={approveDeleteModal.isDeleteModalOpen}
        >
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Are you Sure want to delete shop?
                          </Dialog.Title>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => {
                          handleDeleteShop(approveDeleteModal.id);
                          setDeleteModal({
                            id: "",
                            isDeleteModalOpen: false,
                          });
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => {
                          setDeleteModal({
                            id: "",
                            isDeleteModalOpen: false,
                          });
                        }}
                      >
                        NO
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <Pagination
        totalPage={totalPages}
        activePage={paginationParams.page}
        onPageChange={(page: number) => {
          setPaginationParams({ ...paginationParams, page });
        }}
      />
    </React.Fragment>
  );
};
export default Dashboard;
