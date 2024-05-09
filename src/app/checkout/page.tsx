"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { FaArrowsRotate, FaClosedCaptioning } from "react-icons/fa6";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const rows = [
    { name: "Walton AC", price: 120000, image: "Banner", quantity: 1 },
  ];
  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };
  console.log(quantity);
  return (
    <div className="grid grid-cols-3 gap-4 justify-between">
      <div className="col-span-2 py-4">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Update & Delete</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.image}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">Ashaduzzaman Sojib</TableCell>
                <TableCell className="flex gap-2">
                  <input
                    onChange={(e) => handleQuantity(e)}
                    type="number"
                    min={1}
                    placeholder={row.quantity}
                    className="w-[80px]"
                  />
                  <button className="px-3 bg-primary text-white">
                    <FaArrowsRotate />
                  </button>
                  <button className="px-3 bg-accent text-white">x</button>
                </TableCell>
                <TableCell align="right">
                  <button>Update</button>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 bg-secondary">
        <h2 className="text-primary text-xl font-semibold">
          Continue Purchase?
        </h2>
      </div>
    </div>
  );
};

export default Checkout;
