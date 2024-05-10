"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import FeaturedCard from "../cards/FeaturedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useGetPopularProductQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";
import toast from "react-hot-toast";

const PopularSection: React.FC = () => {
  const { data: popular, isLoading } = useGetPopularProductQuery([]);
  const [addCartItem, { isError, isSuccess }] = useAddCartItemMutation();

  const handleAddToCart = async (data: any) => {
    await addCartItem(data);
    if (isSuccess) {
      toast.success("Product Added To Cart!");
    }
    if (isError) {
      toast.error("Product Already Added!");
    }
  };
  
  return (
    <>
      <SectionTitle
        title="Popular Products"
        description="Explore More Popular Items in PCPartsBD!"
      />
      <div className="my-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
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
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
            1280: {
              width: 1280,
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {isLoading ? (
            <DataLoader />
          ) : (
            popular?.data.map((item: Product) => (
              <SwiperSlide key={item._id}>
                <FeaturedCard product={item} handleAddToCart={handleAddToCart} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
};

export default PopularSection;
