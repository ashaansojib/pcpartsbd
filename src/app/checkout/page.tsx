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
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowsRotate, FaArrowDown, FaDeleteLeft } from "react-icons/fa6";
import { CartItemPros } from "../../../global-interfaces";
import Image from "next/image";
import {
  useGetCartItemsQuery,
  useRemoveBuyItemMutation,
  useUpdateQuantityMutation,
} from "@/redux/features/addItems/AddCartApi";

const Checkout = () => {
  const { data: cartItem, isLoading } = useGetCartItemsQuery([]);
  const [removeItem] = useRemoveBuyItemMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [quantity, setQuantity] = useState(1);
  const handleCoupon = () => {
    toast.error("Code is not vail right now!");
  };
  const handleRemove = async (id: string) => {
    await removeItem(id);
    toast.success("Deleted item from cart!");
  };
  const handlePriceUpdate = async (id: string) => {
    try {
      updateQuantity({ id, data: { quantity: quantity } });
      toast.success("Price updated successfully!");
    } catch (error) {
      toast.error("Failed to update the quantity!");
    }
  };
  return (
    <div className="my-container">
      {cartItem?.data.length <= 0 ? (
        <div className="max-w-md mx-auto text-center py-2">
          <p className="p-4 text-xl">Your shopping cart is empty!</p>
          <Link
            href="/"
            className="px-3 py-2 bg-primary inline-block text-white uppercase font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
          <div className="col-span-2 py-4 overflow-x-auto">
            <Table sx={{ width: 650 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItem?.data.map((item: CartItemPros) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <Image
                        src={item.image}
                        alt="product image"
                        height={100}
                        width={50}
                        layout="responsive"
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell align="center" className="space-x-1">
                      <input
                        onChange={(e) =>
                          setQuantity(parseFloat(e.target.value))
                        }
                        type="number"
                        defaultValue={item.quantity}
                        min={1}
                        className="w-[50px]"
                      />
                      <button
                        onClick={() => handlePriceUpdate(item._id)}
                        className="p-2 bg-primary text-white"
                      >
                        <FaArrowsRotate />
                      </button>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="bg-accent p-2 text-white"
                      >
                        <FaDeleteLeft />
                      </button>
                    </TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.totalPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="p-4 bg-secondary">
            <h2 className="text-primary pb-2 font-semibold">
              Continue Purchase?
            </h2>
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
                  <input
                    type="text"
                    placeholder="Enter your coupon code here!"
                  />
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
              <h3 className="font-medium p-2">Total: {cartItem?.totalPrice}</h3>
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
      )}
    </div>
  );
};

export default Checkout;
