"use client";
import React, { useEffect } from "react";
import { CategoryCartProps } from "../../../global-interfaces";
import Image from "next/image";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";
import toast from "react-hot-toast";
import Link from "next/link";

const CategoryCart: React.FC<CategoryCartProps> = ({ product }) => {
  const [addCartItem, { isSuccess, isError }] = useAddCartItemMutation();
  const {
    title,
    brand,
    description,
    discount,
    image,
    model,
    price,
    status,
    fileName,
  } = product;
  const handleAddToCart = async () => {
    const addData = {
      title,
      image,
      price,
      discount,
      model,
      totalPrice: price,
      quantity: 1,
    };
    await addCartItem(addData);
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
    <div className="category-cart-container">
      <div>
        <Image
          src={image}
          alt="Image not found!"
          width={350}
          height={300}
          layout="responsive"
        />
        <p className="absolute top-2 left-2 font-semibold text-sm bg-primary text-white p-1">
          -{discount}%
        </p>
        <div className="pb-3">
          <p>
            Status: <span className="text-accent">{status}</span>
          </p>
          <p>
            Model: <span className="text-accent">{model}</span>
          </p>
          <p>
            Brand: <span className="text-accent">{brand}</span>
          </p>
          <Link href={`/details/${fileName}`}>
            <h3 className="font-semibold">{title}</h3>
          </Link>
        </div>
      </div>
      <div>
        <li className="text-sm py-2">{description.slice(0, 117)} ...</li>
        <p className="text-red-500 font-semibold text-center">
          Price: {price} Tk
        </p>
        <button onClick={handleAddToCart} className="add-to-card-btn">
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default CategoryCart;
