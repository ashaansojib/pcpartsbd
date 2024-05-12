import React from "react";
import { CategoryCartProps } from "../../../global-interfaces";
import Link from "next/link";
import Image from "next/image";

const CategoryCart: React.FC<CategoryCartProps> = ({ product }) => {
  const {
    title,
    fileName,
    brand,
    description,
    discount,
    image,
    model,
    price,
    status,
  } = product;
  return (
    <div className="category-cart-container">
      {/* <div className="relative"> */}
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
      {/* </div> */}
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
        <h3 className="font-semibold">
          {title}
        </h3>
      </div>
      <li className="text-sm py-2">{description.slice(0, 117)} ...</li>
      <div className="text-center">
        <p className="text-red-500 font-semibold">Price: {price} Tk</p>
        <button className="add-to-card-btn">Add To Card</button>
      </div>
    </div>
  );
};

export default CategoryCart;
