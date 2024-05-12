"use client";
import CategoryCart from "@/components/cards/CategoryCart";
import { DataLoader } from "@/components/shared/Loader";
import { useGetProductsByCategoryQuery } from "@/redux/features/products/productApi";
import React from "react";
import { Product } from "../../../../global-interfaces";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
  Typography,
} from "@mui/material";
import { FaArrowDown } from "react-icons/fa6";

const CategoryDetails = ({ params }: { params: { categoryId: string } }) => {
  const { data: categories, isLoading } = useGetProductsByCategoryQuery(
    params.categoryId
  );
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 py-4">
        {/* category sidebar section */}
        <div className="p-2 bg-secondary">
          <p className="font-semibold border-b text-center">Price</p>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            // getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
        {/* category main area section */}
        <div className="col-span-3">
          <h2>All the same category items display here!</h2>
          <div>
            {isLoading ? (
              <DataLoader />
            ) : categories?.data.length === 0 ? (
              <p>No Item Found In this Category!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center">
                {categories?.data.map((category: Product) => (
                  <CategoryCart key={category._id} product={category} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
