"use client";
import CategoryCart from "@/components/cards/CategoryCart";
import { DataLoader } from "@/components/shared/Loader";
import { useGetProductsByCategoryQuery } from "@/redux/features/products/productApi";
import React from "react";
import { Product } from "../../../../global-interfaces";

const CategoryDetails = ({ params }: { params: { categoryId: string } }) => {
  const { data: categories, isLoading } = useGetProductsByCategoryQuery(
    params.categoryId
  );
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 py-4">
        {/* category sidebar section */}
        <div>sidebar + {params.categoryId}</div>
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
