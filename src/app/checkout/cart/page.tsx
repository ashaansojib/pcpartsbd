import {
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const rows = [
    { name: "Walton AC", price: 120000, image: "Banner", quantity: 1 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between">
      <div>
        <h2>others details</h2>
      </div>
      <div className="col-span-2 p-4 bg-secondary">
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
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ minWidth: "450px", overflowY: "auto" }}
        >
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
                <TableCell align="right">Ashaduzzaman Sojib</TableCell>
                <TableCell className="flex gap-2">
                  <input placeholder={row.quantity} className="w-[80px]" />
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
        <textarea placeholder="Share your any opinion as you want!" id=""></textarea>
        <FormControlLabel
         className="block"
          control={<Checkbox />}
          label="I wish to subscribe to the Universal Computer BD newsletter"
        />
        <FormControlLabel
        sx={{fontSize: 14}}
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
        <button className="add-to-card-btn">Confirm Order</button>
      </div>
    </div>
  );
};

export default Cart;
