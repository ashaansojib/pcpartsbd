"use client";
import {
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CartItemPros, User } from "../../../../global-interfaces";
import {
  useGetCartItemsQuery,
  useOrderConfirmMutation,
} from "@/redux/features/addItems/AddCartApi";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { data: cartItem } = useGetCartItemsQuery([]);
  const [orderConfirm] = useOrderConfirmMutation();
  const [shippingMethod, setShippingMethod] = useState(0);
  const [userType, setUserType] = useState("guest");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (data) => {
    // const buyProductData = {
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   mobile: data.mobile,
    //   division: data.division,
    //   state: data.state,
    //   zip: data.zip,
    //   deliverFee: shippingMethod,
    //   comment: data.comment,
    // };
    await orderConfirm({});
    toast.success("Order Confirmed Now!");
    reset();
    router.push("/");
  };
  const handleShippingMethod = (price: number) => {
    if (price === 60) {
      setShippingMethod(60);
    } else {
      setShippingMethod(0);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between">
        <div className="p-2 md:p-4">
          <FormControlLabel
            onClick={() => setUserType("guest")}
            control={<Checkbox checked={userType === "guest"} />}
            label="As Guest"
          />
          <FormControlLabel
            control={<Checkbox checked={userType === "user"} />}
            onClick={() => setUserType("user")}
            label="Sign Up"
          />
          <h2 className="font-semibold">Your Personal Details</h2>
          <div>
            <label className="py-2 inline-block px-1">First Name</label>
            <input
              disabled={userType === "guest"}
              placeholder="First Name"
              {...register("firstName")}
            />
            <label className="py-2 inline-block px-1">Last Name</label>
            <input
              disabled={userType === "guest"}
              placeholder="Last Name"
              {...register("lastName")}
            />
            <label className="py-2 inline-block px-1">Mobile</label>
            <input
              disabled={userType === "guest"}
              placeholder="Mobile"
              {...register("mobile")}
            />
            <label className="py-2 inline-block px-1">Division</label>
            <input
              disabled={userType === "guest"}
              placeholder="Division"
              {...register("division")}
            />
            <label className="py-2 inline-block px-1">State</label>
            <input
              disabled={userType === "guest"}
              placeholder="State"
              {...register("state")}
            />
            <label className="py-2 inline-block px-1">Zip Code</label>
            <input
              disabled={userType === "guest"}
              placeholder="Postal Code"
              {...register("zip")}
            />
          </div>
        </div>
        <div className="col-span-2 p-4">
          <h2 className="font-semibold">Shipping Methods</h2>
          <div>
            <FormControlLabel
              onClick={() => handleShippingMethod(0)}
              control={<Checkbox checked={shippingMethod === 0} />}
              label="Pickup From Store - TK 0"
            />
            <FormControlLabel
              onClick={() => handleShippingMethod(60)}
              control={<Checkbox checked={shippingMethod === 60} />}
              label="Out of Rangpur City - TK 60"
            />
          </div>
          <h2 className="font-semibold">Payment Methods</h2>
          <div>
            <FormControlLabel
              control={<Checkbox disabled={true} />}
              label="Pay with cards / E-Pay / Bank Card"
            />
            <FormControlLabel
              control={<Checkbox checked />}
              label="Cash On Delivery"
            />
          </div>
          <div className="overflow-x-auto">
            <Table style={{ width: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Quantity</TableCell>
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
                        alt="Product Image"
                        height={50}
                        width={100}
                        layout="responsive"
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell align="right">{item.totalPrice}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="py-2 mt-2 text-right bg-fuchsia-50">
            <h3 className="font-medium p-2 border-b">
              Sub-Total: {cartItem?.totalPrice}
            </h3>
            <h3 className="font-medium p-2 border-b">
              Dalivery Fee: {shippingMethod}
            </h3>
            <h3 className="font-medium p-2">
              Total: {cartItem?.totalPrice + shippingMethod}
            </h3>
          </div>
          <h2 className="font-semibold pt-4 pb-2">Comment Box...</h2>
          <textarea
            placeholder="Share your any opinion as you want!"
            {...register("comment")}
          ></textarea>
          <FormControlLabel
            className="block"
            control={<Checkbox />}
            label="I read and agree to the Privacy Policy"
          />
          <FormControlLabel
            className="block"
            control={<Checkbox />}
            label="I read and agree to the Terms & Conditions"
          />
          <input
            type="submit"
            // value={`${isLoading ? "Loading..." : "Go Publish"}`}
            value="Confirm Order"
            className="submit-btn"
          />
        </div>
      </div>
    </form>
  );
};

export default Cart;
