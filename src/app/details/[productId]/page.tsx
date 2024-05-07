"use client";
import { DataLoader } from "@/components/shared/Loader";
import { useGetProductQuery } from "@/redux/features/products/productApi";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const {
    data: singleItem,
    isLoading,
    isFetching,
    refetch,
  } = useGetProductQuery(params.productId);
  if (isLoading || isFetching) {
    return <DataLoader />;
  }

  const {
    title,
    image,
    brand,
    category,
    status,
    price,
    description,
    keyFeature,
    discount,
    model,
  } = singleItem?.data;
  return (
    <div className="bg-secondary">
      <div className="my-container grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-between py-4 px-2 md:px-0">
        <div className="border p-2">
          <Image src={image} alt="product image" width={500} height={350} />
        </div>
        <div className="col-span-2">
          <h2 className="text-primary text-3xl font-semibold">{title}</h2>
          <div className="pb-6 font-medium">
            <p>
              Status: <span className="text-accent">{status}</span>
            </p>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Category: {category}</p>
          </div>
          <div>
            <h4>Key Features</h4>
            <p>{description}</p>
          </div>
          <h2 className="py-2">
            <span className="text-xl font-bold">BDT:{price}</span>{" "}
            <span className="text-accent line-through">{discount}% Off</span>
          </h2>
          <div className="flex gap-2">
            <button className="add-to-card-btn">Add To Cart</button>
            <button className="add-to-card-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
