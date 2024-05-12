import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CategoriApi = createApi({
    reducerPath: "CategoriApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pcpartsbd-server.vercel.app/api"
    }),
    tagTypes: ["features"],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/features",
            providesTags: ["features"],
        }),
        addCategory: builder.mutation({
            query: (data) => ({
                url: "/features",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["features"],
        }),
        removeCategory: builder.mutation({
            query: (id) => ({
                url: `/features/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["features"],
        }),
    }),
});
export const { useGetCategoriesQuery, useAddCategoryMutation, useRemoveCategoryMutation } = CategoriApi;
