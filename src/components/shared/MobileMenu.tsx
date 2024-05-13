import { useGetMenusQuery } from "@/redux/features/navItem/navApi";
import { Box, Drawer } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Menu } from "../../../global-interfaces";

interface ToggleProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  open: boolean;
}

const MobileMenu = ({ toggleDrawer, open }: ToggleProps) => {
  const { data: menus, isLoading } = useGetMenusQuery([]);
  return (
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ul className="w-[250px]">
          <Link href="/" className="active">
            Home
          </Link>
          {isLoading
            ? "Main menubar loading now!"
            : menus?.data.map((menu: Menu) => (
                <Link key={menu._id} href={menu.link} className="default">
                  {menu.title}
                </Link>
              ))}
        </ul>
      </Drawer>
  );
};

export default MobileMenu;
