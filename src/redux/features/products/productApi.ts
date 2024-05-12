import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pcpartsbd-server.vercel.app/api",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, limit }) => `/products?page=${page}&limit=${limit}`,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    getCaseByCategory: builder.query({
      query: () => ({
        url: `/products?category=casing`,
      }),
    }),
    getChairByCategory: builder.query({
      query: () => "/products?category=chair",
    }),
    getNewArrivalProduct: builder.query({
      query: () => "/products?category=new-arrival",
    }),
    getPopularProduct: builder.query({
      query: () => "/products?category=popular",
    }),
    getProductsByCategory: builder.query({
      query: (name) => `/products?category=${name}`
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useRemoveProductMutation,
  useGetCaseByCategoryQuery,
  useGetChairByCategoryQuery,
  useGetNewArrivalProductQuery,
  useGetPopularProductQuery,
  useGetProductsByCategoryQuery,
} = ProductApi;
