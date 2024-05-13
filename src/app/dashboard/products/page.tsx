"use client";
import React, { useState } from "react";
import { DashboardTitle } from "../shared/DashboardTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "@/redux/features/products/productApi";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

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
  const [selectCategory, setSelectCategory] = useState(" ");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProducts>();
  const onSubmit: SubmitHandler<CreateProducts> = (data) => {
    const formatedData = {
      title: data.title,
      description: data.info,
      keyFeature: ["price", "fixed"],
      image: data.image,
      category: selectCategory,
      brand: data.brand.toLowerCase(),
      model: data.model,
      status: data.status,
      price: parseFloat(data.price),
      discount: parseFloat(data.discount),
    };
    addProduct(formatedData);
    reset();
  };
  const handleChangeCategory = (event: SelectChangeEvent) => {
    setSelectCategory(event.target.value as string);
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
              {/* <input
                placeholder="Category"
                {...register("category", { required: true })}
              /> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectCategory}
                  label="Category"
                  onChange={handleChangeCategory}
                >
                  <MenuItem value="new-arrival">New Arrival</MenuItem>
                  <MenuItem value="popular">Popular</MenuItem>
                  <MenuItem value="casing">Casing</MenuItem>
                  <MenuItem value="chair">Gamming Chair</MenuItem>
                  <MenuItem value="laptop">Laptop</MenuItem>
                  <MenuItem value="monitor">Monitor</MenuItem>
                  <MenuItem value="ssd&hdd">SSD & HDD</MenuItem>
                  <MenuItem value="accessorise">Accessorise</MenuItem>
                  <MenuItem value="networking">Networking</MenuItem>
                  <MenuItem value="gatget">Gadgets</MenuItem>
                  <MenuItem value="desktop">Full Desktop</MenuItem>
                  <MenuItem value="component">Components</MenuItem>
                </Select>
              </FormControl>
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
