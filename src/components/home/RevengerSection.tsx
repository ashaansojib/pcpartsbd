"use client";
import React, { useEffect } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";
import { useGetCaseByCategoryQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";
import toast from "react-hot-toast";

const RevengerSection: React.FC = () => {
  const { data: casing, isLoading: getLoader } = useGetCaseByCategoryQuery([]);

  const [addCartItem, { isError, isSuccess }] = useAddCartItemMutation();

  const handleAddToCart = async (data: any) => {
    await addCartItem(data);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product Added To Cart!");
    }
    if (isError) {
      toast.error("Product Already Added!");
    }
  }, [isSuccess, isError]);
  return (
    <div className="bg-secondary py-4">
      <SectionTitle
        title="Explore Revenger"
        description="A Big Options For Choose Revenger Case"
      />
      <div className="my-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2 h-full">
        {getLoader ? (
          <DataLoader />
        ) : (
          casing.data?.map((revenger: Product) => (
            <CaseCard
              key={revenger._id}
              product={revenger}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RevengerSection;
