"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Carts = () => {
  const [countItem, setCountItem] = useState(0);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCountItem(data.length);
  }, []);
  return (
    <Link href="/checkout">
      <div className="p-3 fixed z-10 bottom-20 shadow-md hover:shadow-black right-8 rounded bg-primary text-white">
        <FaCartShopping className="text-2xl" />
        <p className="absolute -top-4 -right-2 bg-red-500 w-[20px] text-center h-[23px] rounded-full">{countItem}</p>
      </div>
    </Link>
  );
};

export default Carts;
