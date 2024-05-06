import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../../../global-interfaces";

const CaseCard: React.FC<{ product: Product }> = ({ product }) => {
  const { title, image, price, discount } = product;
  return (
    <div className="case-card-container">
      <div className="relative">
        <Image
          layout="responsive"
          src={image}
          alt={title}
          width={250}
          height={100}
        />
        <h2 className="text-sm font-medium text-primary pb-2">{title}</h2>
        <span className="text-red-500 absolute left-0 top-0 font-semibold">
          {discount !== 0 ? `${discount}% OFF` : null}
        </span>
      </div>
      <div className="w-full">
        <p className="text-accent">BDT: {price}</p>
        <Link href="#">
          <button className="add-to-card-btn">ADD TO CARD</button>
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;
