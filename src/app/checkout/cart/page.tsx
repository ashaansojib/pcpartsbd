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
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../../../global-interfaces";

const Cart = () => {
  const rows = [
    { name: "Walton AC", price: 120000, image: "Banner", quantity: 1, model: "a15s" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between">
        <div className="p-2 md:p-4">
          <FormControlLabel control={<Checkbox />} label="As Guest" />
          <FormControlLabel control={<Checkbox />} label="Sign Up" />
          <h2 className="font-semibold">Your Personal Details</h2>
          <div>
            <label className="py-2 inline-block px-1">First Name</label>
            <input
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            <label className="py-2 inline-block px-1">Last Name</label>
            <input
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
            <label className="py-2 inline-block px-1">Mobile</label>
            <input
              placeholder="Mobile"
              {...register("mobile", { required: true })}
            />
            <label className="py-2 inline-block px-1">Division</label>

            <input
              placeholder="Division"
              {...register("division", { required: true })}
            />
            <label className="py-2 inline-block px-1">State</label>

            <input
              placeholder="State"
              {...register("state", { required: true })}
            />
            <label className="py-2 inline-block px-1">Zip Code</label>

            <input
              placeholder="Postal Code"
              {...register("zip", { required: true })}
            />
          </div>
        </div>
        <div className="col-span-2 p-4">
          <h2 className="font-semibold">Shipping Methods</h2>
          <div>
            <FormControlLabel
              control={<Checkbox />}
              label="Pickup From Store - TK 0"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="In of Rangpur City - TK 60"
            />
          </div>
          <h2 className="font-semibold">Payment Methods</h2>
          <div>
            <FormControlLabel
              control={<Checkbox />}
              label="Pay with cards / E-Pay / Bank Card"
            />
            <FormControlLabel control={<Checkbox />} label="Cash On Delivery" />
          </div>
          <Table style={{ minWidth: "450px", overflowY: "auto" }}>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.image}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.model}</TableCell>
                  <TableCell className="flex gap-2">
                    <input type="number" defaultValue={row.quantity} className="w-[80px]" />
                    <button className="px-3 bg-accent text-white">x</button>
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="py-2 mt-2 text-right bg-fuchsia-50">
            <h3 className="font-medium p-2 border-b">Sub-Total: 120,000</h3>
            <h3 className="font-medium p-2 border-b">Dalivery Fee: 0</h3>
            <h3 className="font-medium p-2">Total: 122,000</h3>
          </div>
          <h2 className="font-semibold pt-4 pb-2">Comment Box...</h2>
          <textarea
            placeholder="Share your any opinion as you want!"
            id=""
          ></textarea>
          <FormControlLabel
            className="block"
            control={<Checkbox />}
            label="I wish to subscribe to the Universal Computer BD newsletter"
          />
          <FormControlLabel
            sx={{ fontSize: 14 }}
            className="block text-sm"
            control={<Checkbox />}
            label="I read and agree to the Privacy Policy"
          />
          <FormControlLabel
            className="block"
            control={<Checkbox />}
            label="I read and agree to the Terms & Conditions"
          />
          <FormControlLabel
            className="block"
            control={<Checkbox />}
            label="I read and agree to the Refund Policy"
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
