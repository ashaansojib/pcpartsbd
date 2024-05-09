import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FeaturedCardProps } from "../../../global-interfaces";

const FeaturedCard: React.FC<FeaturedCardProps> = ({ product, handleBuy }) => {
  const { title, image, price, discount, _id, model } = product;
  const addData = {
    _id,
    title,
    image,
    price,
    discount,
    model,
    quantity: 1,
  };
  return (
    <div className="featured-card-container">
      <div className="relative">
        <Link href={`/details/${_id}`}>
          <Image
            layout="responsive"
            src={image}
            alt={title}
            width={250}
            height={80}
          />
          <h2 className="text-sm font-medium text-primary pb-2">{title}</h2>
        </Link>
        <span className="text-red-500 absolute px-1 left-0 top-0 font-semibold bg-secondary">
          {discount ? `${discount + "%"}` : ""}
        </span>
      </div>
      <div className="w-full">
        <p className="text-accent">BDT: {price}</p>
          <button
            onClick={() => handleBuy(addData)}
            className="add-to-card-btn"
          >
            ADD TO CARD
          </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
