import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Kids from "./Kids";
import Men from "./Men";
import Women from "./Women";
import { useGetAllProductsQuery } from "../../features/productsApi";

const Shop = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const filterProductsByAgeGroup = (ageGroup) => {
    return data?.filter((product) => product.ageGroup === ageGroup);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/men"
          element={
            <Men data={filterProductsByAgeGroup("men")} isLoading={isLoading} />
          }
        />
        <Route
          path="/women"
          element={
            <Women
              data={filterProductsByAgeGroup("women")}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/kids"
          element={
            <Kids
              data={filterProductsByAgeGroup("kids")}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Shop;
