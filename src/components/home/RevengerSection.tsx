"use client";
import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";
import { useGetCaseByCategoryQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";

const RevengerSection: React.FC = () => {
  const { data: casing, isLoading } = useGetCaseByCategoryQuery([]);
  const handleAddToCart = (data: any) => {
    const existingCartItem =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const isProductExist = existingCartItem.find(
      (item: Product) => item._id === data._id
    );
    if (isProductExist) {
      return alert("product already added!");
    } else {
      const newItem = data;
      const updateItem = [...existingCartItem, newItem];
      localStorage.setItem("cartItems", JSON.stringify(updateItem));
    }
  };
  return (
    <div className="bg-secondary py-4">
      <SectionTitle
        title="Explore Avenger"
        description="A Big Options For Choose Avengers Case"
      />
      <div className="my-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2 h-full">
        {isLoading ? (
          <DataLoader />
        ) : (
          casing.data?.map((revenger: Product) => (
            <CaseCard key={revenger._id} product={revenger} handleBuy={handleAddToCart} />
          ))
        )}
      </div>
    </div>
  );
};

export default RevengerSection;
