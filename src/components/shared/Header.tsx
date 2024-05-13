"use client";
import React, { useState } from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import { FaBlackTie, FaSearch, FaTrash } from "react-icons/fa";
import {
  FaBars,
  FaBookBookmark,
  FaDesktop,
  FaHandshakeSimple,
} from "react-icons/fa6";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/redux/features/products/productSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [inputStr, setInputStr] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useRouter();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleSearch = () => {
    dispatch(setSearchText(inputStr));
    navigate.push("/search");
  };

  return (
    <header>
      {/* if doing search then called it */}
      <TopHeader />
      {/* main header area */}
      <div className="header-container">
        {/* logo area */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <h3 className="text-3xl font-bold w-[150px]">
              PCParts<span className="text-accent">BD</span>
            </h3>
          </Link>
          <FaBars
            className="block md:hidden text-3xl"
            onClick={toggleDrawer(true)}
          >
            Open drawer
          </FaBars>
        </div>
        {/* search bar */}
        <div className="relative md:col-span-2">
          <input
            onChange={(e) => setInputStr(e.target.value)}
            type="text"
            className="border border-red-500 p-2 rounded-md w-full"
            placeholder="Just type your thinking..."
          />
          <FaSearch
            onClick={handleSearch}
            className="absolute top-3 cursor-pointer right-4"
          />
        </div>
        {/* header deals options */}
        <div className="header-deals">
          <div className="header-deal-container">
            <FaTrash />
            <div>
              <h3 className="font-semibold text-sm">Complaint Box</h3>
              <p className="text-xs">Any Problem?</p>
            </div>
          </div>
          <div className="header-item">
            <FaBlackTie />
            <div>
              <h3 className="font-semibold text-sm">Corporate Deal</h3>
              <p className="text-xs">Make A Deal</p>
            </div>
          </div>
          <div className="header-item">
            <FaHandshakeSimple />
            <div>
              <h3 className="font-semibold text-sm">Become A Dealer</h3>
              <p className="text-xs">Business?</p>
            </div>
          </div>
          <div className="header-item">
            <FaDesktop />
            <div>
              <h3 className="font-semibold text-sm">PC Builder</h3>
              <p className="text-xs">Configure Now</p>
            </div>
          </div>
          <div className="header-item">
            <FaBookBookmark />
            <div>
              <h3 className="font-semibold text-sm">Blogs</h3>
              <p className="text-xs">Business?</p>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu toggleDrawer={toggleDrawer} open={open} />
      <NavBar />
    </header>
  );
};

export default Header;
