"use client";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../shared/SectionTitle";
import CaseCard from "../cards/CaseCard";
import { useGetCaseByCategoryQuery } from "@/redux/features/products/productApi";
import { Casing } from "../../../global-interfaces";
import { DataLoader } from "../shared/Loader";

const RevengerSection: React.FC = () => {
  const { data: casing, isLoading } = useGetCaseByCategoryQuery([]);
  console.log(casing?.data);
  return (
    <div className="bg-secondary py-4">
      <SectionTitle
        title="Explore Avenger"
        description="A Big Options For Choose Avengers Case"
      />
      <div className="my-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2 h-full">
        {isLoading ? (
          <DataLoader />
        ) : (
          casing.data?.map((revenger: Casing) => (
            <CaseCard
              key={revenger._id}
              title={revenger.title}
              image={revenger.image}
              price={revenger.price}
              discount={revenger.discount}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RevengerSection;
