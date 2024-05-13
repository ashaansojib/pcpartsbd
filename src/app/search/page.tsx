"use client";
import { DataLoader } from "@/components/shared/Loader";
import { useGetProductsBySearchQuery } from "@/redux/features/products/productApi";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../../global-interfaces";
import CaseCard from "@/components/cards/CaseCard";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";
import toast from "react-hot-toast";

const SearchPage = () => {
  const searchText = useSelector((state: RootState) => state.search.searchText);
  const { data: products, isLoading } = useGetProductsBySearchQuery(searchText);
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
    <div>
      {products?.count <= 0 && <p className="py-4 text-center text-red-500 font-semibold">Sorry! Products not available now...</p>}
      <div className="my-container py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2 h-full">
        {isLoading ? (
          <DataLoader />
        ) : (
          products.data?.map((product: Product) => (
            <CaseCard
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
