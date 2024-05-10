"use client";
import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import FeaturedCard from "../cards/FeaturedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useGetNewArrivalProductQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";
import { useAddCartItemMutation } from "@/redux/features/addItems/AddCartApi";
import toast from "react-hot-toast";
const NewArrival: React.FC = () => {
  const {
    data: allArrival,
    isLoading,
  } = useGetNewArrivalProductQuery([]);

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
    <div className="py-4">
      <SectionTitle
        title="New Arrival!"
        description="Check & Purchage Your Desire Products!"
      />
      <div className="my-container pb-4">
        <Swiper
          className="mySwiper"
          height={100}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          autoplay={{ delay: 5000 }}
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
              slidesPerView: 5,
            },
          }}
          modules={[Navigation, Autoplay]}
        >
          {isLoading ? (
            <DataLoader />
          ) : (
            allArrival?.data.map((arrival: Product) => (
              <SwiperSlide key={arrival._id}>
                <FeaturedCard product={arrival} handleAddToCart={handleAddToCart} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
