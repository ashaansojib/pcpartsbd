"use client";
import CategoryCart from "@/components/cards/CategoryCart";
import { DataLoader } from "@/components/shared/Loader";
import { useGetProductsByCategoryQuery } from "@/redux/features/products/productApi";
import React, { useState } from "react";
import { Product } from "../../../../global-interfaces";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const CategoryDetails = ({ params }: { params: { categoryId: string } }) => {
  const [price, setPrice] = useState<number>(200000);
  const { data: categories, isLoading } = useGetProductsByCategoryQuery(
    {category: params.categoryId, price: price}
  );
  const [orders, setOrders] = React.useState("ascending");

  const handleChange = (event: SelectChangeEvent) => {
    setOrders(event.target.value as string);
  };

  const sortProductsByPrice = (products: Product[]) => {
    return products.slice().sort((a, b) => {
      if (orders === "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 py-4">
        {/* category sidebar section */}
        <div className="p-2 bg-secondary">
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Sort By Order
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={orders}
              label="orders"
              onChange={handleChange}
            >
              <MenuItem value={"ascending"}>Ascending</MenuItem>
              <MenuItem value={"descending"}>Descending</MenuItem>
            </Select>
          </FormControl>
          <p className="pt-4 text-sm">Price Range</p>
          <input type="number" value={price} />
          <input
            min={10000}
            max={200000}
            step={10000}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="cursor-pointer"
            type="range"
          />
        </div>
        {/* category main area section */}
        <div className="col-span-3">
          <div className="p-2 bg-secondary">
            <h2>All the same category items display here!</h2>
          </div>
          <div>
            {isLoading ? (
              <DataLoader />
            ) : categories?.data.length === 0 ? (
              <p className="p-4 font-semibold text-center text-red-500">Your queries product is not available!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center">
                {sortProductsByPrice(categories?.data).map(
                  (category: Product) => (
                    <CategoryCart key={category._id} product={category} />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
