"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/redux/features/products/productSlice";

interface BrandsProps {
  id: string;
  brand: string;
  logo: string;
}
const Brands: React.FC = () => {
  const [brands, setBrands] = useState<BrandsProps[]>([]);
  const navigate = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/fake/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  const handleBrandSearch = (brand: string) => {
    dispatch(setSearchText(brand));
    navigate.push("/search");
  };
  return (
    <div className="my-container pb-3">
      <Swiper
        className="mySwiper"
        slidesPerView={8}
        spaceBetween={10}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 2,
          },
          640: {
            width: 640,
            slidesPerView: 4,
          },
          768: {
            width: 768,
            slidesPerView: 6,
          },
          1280: {
            width: 1280,
            slidesPerView: 8,
          },
        }}
        modules={[Autoplay]}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id} className="border w-full p-2 bg-white">
            <p
              onClick={() => handleBrandSearch(brand.brand)}
              className="flex justify-center cursor-pointer items-center"
            >
              <Image
                src={brand.logo}
                alt="Logo"
                width={120}
                height={35}
                layout="responsive"
              />
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
