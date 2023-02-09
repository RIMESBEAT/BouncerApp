import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      //the id is for single product, if we go to where we will fetch our products, we will insert id into  "useGetAllProductsQuery(id)"

      query: (id) => "api/getProducts",
    }),
    getSingleProducts: builder.query({
      //the id is for single product, if we go to where we will fetch our products, we will insert id into  "useGetAllProductsQuery(id)"

      query: (id) => `api/getProduct/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductsQuery } = productsApi;
