"use client";
import React from "react";
import { DashboardTitle } from "../shared/DashboardTitle";
import { FaEdit } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useAddMenuMutation,
  useGetMenusQuery,
  useRemoveMenuMutation,
} from "@/redux/features/navItem/navApi";
import { DataLoader } from "@/components/shared/Loader";
import { Menu } from "../../../../global-interfaces";
import { FaDeleteLeft } from "react-icons/fa6";

type Inputs = {
  title: string;
  link: string;
};

const Page = () => {
  const { data: menus, isLoading: dataGetting, refetch } = useGetMenusQuery([]);
  const [createMenu, { isLoading }] = useAddMenuMutation();
  const [removeItem] = useRemoveMenuMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createMenu(data);
    reset();
  };
  // hadler of toast
  const handleToaster = () => {
    toast.error("This is Admin actions!");
  };
  const handleRemove = (id: string) => {
    removeItem(id);
    toast.error("This is Admin actions!");
    refetch();
  };
  return (
    <>
      <Toaster position="top-right" />
      <DashboardTitle title="You Can Manage Navigation Here!" />
      <div className="p-2 grid lg:grid-cols-3 grid-cols-1 gap-4 justify-between">
        {/* add menu form */}
        <div className="col-span-2">
          <h3 className="text-accent font-medium border-b">Add Menu..</h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between py-2">
                <input
                  placeholder="Menu Title"
                  {...register("title", { required: true })}
                />
                <input
                  placeholder="Menu Link"
                  {...register("link", { required: true })}
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.link && (
                <span className="error-btn">This field is required</span>
              )}
              <input
                type="submit"
                value={`${isLoading ? "Loading..." : "Add Menu"}`}
                className="submit-btn"
              />
            </form>
          </div>
        </div>
        {/* show menu items */}
        <div>
          <h3 className="text-accent font-medium border-b">Menu Lists..</h3>
          {dataGetting ? (
            <DataLoader />
          ) : (
            menus.data?.map((menu: Menu) => (
              <div
                key={menu._id}
                className="bg-secondary p-2 mb-2 hover:bg-white"
              >
                <p className="font-medium">{menu.title} -</p>
                <div className=" flex gap-2 items-center ">
                  <span className="text-xs">/{menu.link}</span>
                  <FaDeleteLeft
                    onClick={() => handleRemove(menu._id)}
                    className="cursor-pointer"
                  />
                  <FaEdit onClick={handleToaster} className="cursor-pointer" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
