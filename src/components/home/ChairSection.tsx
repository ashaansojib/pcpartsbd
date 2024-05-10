"use client";
import React, { useEffect } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useGetChairByCategoryQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";
import toast from "react-hot-toast";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";

const ChairSection: React.FC = () => {
  const { data: chairs, isLoading } = useGetChairByCategoryQuery([]);
  const [addCartItem, { isSuccess, isError }] = useAddCartItemMutation();

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
                <CaseCard product={chair} handleAddToCart={handleAddToCart} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ChairSection;
