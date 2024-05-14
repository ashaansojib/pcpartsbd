import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
