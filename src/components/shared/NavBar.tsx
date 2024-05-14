"use client";
import { useGetMenusQuery } from "@/redux/features/navItem/navApi";
import Link from "next/link";
import React from "react";
import { Menu } from "../../../global-interfaces";

const NavBar = () => {
  const { data: menus, isLoading } = useGetMenusQuery([]);
  return (
    <nav className="border hidden md:block">
      <div className="my-container">
        <ul>
          <Link href="/" className="active">
            Home
          </Link>
          {menus?.data.map((menu: Menu) => (
                <Link key={menu._id} href={menu.link} className="default">
                  {menu.title}
                </Link>
              ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
