"use client";
import { useGetCartItemsQuery } from "@/redux/features/addItems/AddCartApi";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Carts = () => {
  const { data: cartItem, isLoading } = useGetCartItemsQuery([]);

  return (
    <Link href="/checkout">
      <div className="p-3 fixed z-10 bottom-20 shadow-md hover:shadow-black right-8 rounded bg-primary text-white">
        <FaCartShopping className="text-2xl" />
        {cartItem?.count >0 && (
          <p
            className={`absolute -top-4 -right-2 bg-red-500 w-[20px] text-center h-[23px] rounded-full ${
              isLoading ? "animate-spin" : "animate-none"
            }`}
          >
            {isLoading ? "X" : cartItem?.count}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Carts;
