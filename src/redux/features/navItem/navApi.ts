import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const navApi = createApi({
  reducerPath: "navApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pcpartsbd-server.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => "/menus",
    }),
    addMenu: builder.mutation({
      query: (data) => ({
        url: "/menus",
        method: "POST",
        body: data,
      }),
    }),
    removeMenu: builder.mutation({
      query: (id) => ({
        url: `/menus/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const { useGetMenusQuery, useAddMenuMutation, useRemoveMenuMutation } =
  navApi;
