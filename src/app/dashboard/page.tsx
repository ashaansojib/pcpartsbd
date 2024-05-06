"use client";
import { DashboardTitle } from "./shared/DashboardTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import React from "react";
import { DataLoader } from "@/components/shared/Loader";

const Dashboard: React.FC = () => {
  const { data: products, isLoading } = useGetProductsQuery([]);
  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  // hadler of toast
  const handleToaster = () => {
    toast.error("This is Admin actions!");
  };
  console.log(products?.data);
  return (
    <>
      <Toaster position="top-right" />
      <DashboardTitle title="All Products Manage Here!" />
      <div>
        <div>
          {isLoading ? (
            <DataLoader />
          ) : (
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>SL</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.data?.map((product: Product, i: number) => (
                  <TableRow key={product._id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>PC Case</TableCell>
                    <TableCell className="flex gap-2 items-center">
                      <FaEdit
                        onClick={handleToaster}
                        className="text-xl cursor-pointer"
                      />
                      <FaDeleteLeft
                        onClick={handleToaster}
                        className="text-xl cursor-pointer"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </div>
    </>
  );
};

export default Dashboard;
