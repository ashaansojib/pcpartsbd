"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useGetChairByCategoryQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";

const ChairSection: React.FC = () => {
  const { data: chairs, isLoading } = useGetChairByCategoryQuery([]);
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
    <div className="py-4">
      <SectionTitle
        title="Gamming Chair Best Deals!"
        description="Check & Get Your Desire Product!"
      />
      <div className="my-container pb-4">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1280: {
              width: 1280,
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
        >
          {isLoading ? (
            <DataLoader />
          ) : (
            chairs.data?.map((chair: Product) => (
              <SwiperSlide key={chair._id}>
                <CaseCard product={chair} handleBuy={handleAddToCart} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ChairSection;
