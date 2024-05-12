"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DashboardTitle } from "../shared/DashboardTitle";
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useRemoveCategoryMutation,
} from "@/redux/features/category/FeaturedCat";
import { DataLoader } from "@/components/shared/Loader";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Category } from "../../../../global-interfaces";
import toast from "react-hot-toast";
type Inputs = {
  title: string;
  link: string;
  image: string;
};
const FeatureCategory = () => {
  const { data: categories, isLoading: getLoader } = useGetCategoriesQuery([]);
  const [createCat, { isLoading }] = useAddCategoryMutation();
  const [removeCat] = useRemoveCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formateData = {
      title: data.title.toLocaleLowerCase(),
      link: data.link,
      image: data.image,
    };
    await createCat(formateData);
    toast.success("Category Added Successfully!");
    reset();
  };
  const handleRemove = (id: string) => {
    removeCat(id);
    toast.success("Category Removed!");
  };
  return (
    <>
      <DashboardTitle title="You Can Manage Featured Category Here!" />
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-2">
        <div className="col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between py-2">
              <input
                placeholder="Category Title"
                {...register("title", { required: true })}
              />
              <input
                placeholder="Category Link"
                {...register("link", { required: true })}
              />
              <input
                placeholder="Image Link"
                {...register("image", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.link && (
              <span className="error-btn">This field is required</span>
            )}
            <input
              type="submit"
              value={`${isLoading ? "Loading..." : "Add Category"}`}
              className="submit-btn"
            />
          </form>
        </div>
        <div>
          <h3 className="text-accent font-medium border-b">
            Featured Item Lists..
          </h3>
          {getLoader ? (
            <DataLoader />
          ) : (
            categories?.data.map((category: Category) => (
              <div
                key={category._id}
                className="bg-secondary p-2 mb-2 hover:bg-white"
              >
                <p className="font-medium">{category.title} -</p>
                <div className=" flex gap-2 items-center ">
                  <span className="text-xs">{category.link}</span>
                  <FaDeleteLeft
                    onClick={() => handleRemove(category._id)}
                    className="cursor-pointer"
                  />
                  <FaEdit className="cursor-pointer" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureCategory;
