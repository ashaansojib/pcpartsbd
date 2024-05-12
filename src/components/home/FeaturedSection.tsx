"use client";
import React from "react";
import { SectionTitle } from "../shared/SectionTitle";
import Category from "../cards/Category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useGetCategoriesQuery } from "@/redux/features/category/FeaturedCat";

interface CategoryProps {
  _id: string;
  title: string;
  image: string;
}

const FeaturedSection: React.FC = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery([]);

  return (
    <div className="bg-secondary px-2 py-4">
      <SectionTitle
        title="Featured Category"
        description="Get Your Query From Featured Category"
      />
      <div className="my-container">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={6}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
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
          modules={[Navigation, Autoplay]}
        >
          {isLoading ? (
            <p className="text-center">Please Wait Features Loading Now...</p>
          ) : (
            categories?.data.map((category: CategoryProps) => (
              <SwiperSlide key={category._id}>
                <Category category={category} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedSection;
