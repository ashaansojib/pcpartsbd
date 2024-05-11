import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddCartApi = createApi({
  reducerPath: "AddCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pcpartsbd-server.vercel.app/api",
  }),
  tagTypes: ["checkout"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => "/buy-items",
      providesTags: ["checkout"],
    }),
    addCartItem: builder.mutation({
      query: (data) => ({
        url: "/buy-items",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["checkout"],
    }),
    removeBuyItem: builder.mutation({
      query: (id) => ({
        url: `/buy-items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["checkout"],
    }),
    updateQuantity: builder.mutation({
      query: ({ id, data }) => ({
        url: `/buy-items/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["checkout"],
    }),
  }),
});

export const {
  useAddCartItemMutation,
  useGetCartItemsQuery,
  useRemoveBuyItemMutation,
  useUpdateQuantityMutation,
} = AddCartApi;
