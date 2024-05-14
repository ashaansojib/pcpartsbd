"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import toast from "react-hot-toast";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "@/redux/features/products/productApi";
import { Product } from "../../../global-interfaces";
import { DataLoader } from "@/components/shared/Loader";

const Dashboard: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {
    data: products,
    isLoading,
    refetch,
  } = useGetProductsQuery({
    page: page + 1,
    limit: rowsPerPage,
  });
  const [removeProduct] = useRemoveProductMutation();

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, refetch]);

  const handleRemove = (id: string) => {
    removeProduct(id);
    toast.error("This is Admin action!");
    refetch();
  };
  return (
    <>
        <div>
          {isLoading ? (
            <DataLoader />
          ) : (
            <div className="overflow-x-auto">
              <Table sx={{width: 650}} stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>SL</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.data.map((product: Product, index: number) => (
                  <TableRow key={product._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell>
                      <FaEdit
                        onClick={() => toast.error("This is Admin action!")}
                        className="text-xl cursor-pointer"
                      />
                      <FaDeleteLeft
                        onClick={() => handleRemove(product._id)}
                        className="text-xl cursor-pointer"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          )}
        </div>
        <TablePagination
          component="div"
          count={products?.count || 0}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) =>
            setRowsPerPage(parseInt(event.target.value))
          }
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 35, 45, 55]}
        />
    </>
  );
};

export default Dashboard;
