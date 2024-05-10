"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { CartItemProps } from "../../../global-interfaces";
import Image from "next/image";

const Checkout = () => {
  const [countItem, setCountItem] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCountItem(data);
  }, []);
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value, 10));
  };
  const handleCoupon = () => {
    toast.error("Code is not vail right now!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
      <div className="col-span-2 py-4">
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ minWidth: "450px", overflowY: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Model</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countItem.map((row: CartItemProps) => (
              <TableRow key={row._id}>
                <TableCell>
                  <Image src={row.image} alt="product image" height={100} width={100}/>
                </TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.model}</TableCell>
                <TableCell className="flex justify-center items-center gap-2">
                  <input
                    onChange={(e) => handleQuantity(e)}
                    type="number"
                    min={1}
                    defaultValue={row.quantity}
                    className="w-[80px]"
                  />
                  <button className="px-3 bg-primary text-white inline-block">
                    <FaArrowsRotate />
                  </button>
                  <button className="px-3 bg-accent text-white">x</button>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.price * quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 bg-secondary">
        <h2 className="text-primary pb-2 font-semibold">Continue Purchase?</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaArrowDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="uppercase font-medium">
              Use Coupon Code
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex gap-1 justify-between">
              <input type="text" placeholder="Enter your coupon code here!" />
              <button
                onClick={handleCoupon}
                className="px-2 bg-primary text-white uppercase font-semibold"
              >
                Coupon
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaArrowDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="uppercase font-medium">
              Estimate shipping & Taxes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex gap-1 justify-between">
              <input type="text" placeholder="Taxes & Fees" />
              <button
                onClick={handleCoupon}
                className="px-2 bg-primary text-white uppercase font-semibold"
              >
                taxes
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaArrowDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className="uppercase font-medium">
              Hot Deals 15% discount
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex gap-1 justify-between">
              <input type="text" placeholder="15%" />
              <button className="px-2 bg-primary text-white uppercase font-semibold">
                gift
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* shopping */}
        <div className="py-2 mt-2 text-right bg-fuchsia-50">
          <h3 className="font-medium p-2 border-b">
            Sub-Total: <span>120,000</span>
          </h3>
          <h3 className="font-medium p-2">Total: 122,000</h3>
        </div>
        <div className="flex gap-4 justify-center pt-3">
          <Link
            href="/"
            className="px-3 py-2 bg-primary inline-block text-white uppercase font-semibold"
          >
            Continue Shopping
          </Link>
          <Link
            href="/checkout/cart"
            className="px-3 py-2 bg-green-500 text-white uppercase font-semibold inline-block"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
