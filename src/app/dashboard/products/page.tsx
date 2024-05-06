"use client";
import React from "react";
import { DashboardTitle } from "../shared/DashboardTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "@/redux/features/products/productApi";

type CreateProducts = {
  title: string;
  category: string;
  info: string;
  brand: string;
  price: string;
  discount: string;
  image: string;
  model: string;
  status: string;
};
const AddProduct = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreateProducts>();
  const onSubmit: SubmitHandler<CreateProducts> = (data) => {
    const formatedData = {
      title: data.title,
      description: data.info,
      keyFeature: ["price", "fixed"],
      image: data.image,
      category: data.category.toLowerCase(),
      brand: data.brand.toLowerCase(),
      model: data.model,
      status: data.status,
      price: parseFloat(data.price),
      discount: parseFloat(data.discount),
    };
    addProduct(formatedData);
    reset();
  };

  return (
    <>
      <DashboardTitle title="Published Your Products Here!" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-2 justify-between">
            <div className="col-span-2 p-2">
              <input placeholder="Title" {...register("title")} />
              <textarea
                rows={10}
                placeholder="Description Gose Here!"
                {...register("info")}
              ></textarea>
            </div>
            <div className="bg-slate-100 p-2 space-y-2">
              <input
                placeholder="Category"
                {...register("category", { required: true })}
              />
              <input
                placeholder="Brand"
                {...register("brand", { required: true })}
              />
              <input
                placeholder="Price"
                {...register("price", { required: true })}
              />
              <input
                placeholder="Status"
                {...register("status", { required: true })}
              />
              <input
                placeholder="Image Link"
                {...register("image", { required: true })}
              />
              <input
                placeholder="Model"
                {...register("model", { required: true })}
              />
              <input placeholder="Discount" {...register("discount")} />
              <input
                type="submit"
                value={`${isLoading ? "Loading..." : "Go Publish"}`}
                className="submit-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
