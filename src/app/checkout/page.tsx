import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const Checkout = () => {
  const rows = [
    { name: "Walton AC", price: 120000, image: "Banner", quantity: 1 },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 justify-between">
      <div className="col-span-2 py-4">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Name</TableCell>
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
                <TableCell align="right">{row.quantity}</TableCell>
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
