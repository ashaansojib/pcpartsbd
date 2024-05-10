import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddCartApi = createApi({
  reducerPath: "AddCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pcpartsbd-server.vercel.app/api",
  }),
  tagTypes: ["CartItemPros"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => "/buy-items",
      providesTags: ['CartItemPros']
    }),
    addCartItem: builder.mutation({
      query: (data) => ({
        url: "/buy-items",
        method: "POST",
        body: data,
      }),
    }),
    removeBuyItem: builder.mutation({
      query: (id) => ({
        url: `/buy-items/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddCartItemMutation,
  useGetCartItemsQuery,
  useRemoveBuyItemMutation,
} = AddCartApi;
