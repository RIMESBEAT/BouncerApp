import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Kids from "./Kids";
import Men from "./Men";
import Women from "./Women";
import { useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";

const Shop = () => {
  const [getProduct, setGetProduct] = useState([]);
  
  const products = useSelector(((state)=>state.allProducts.products))
  const dispatch = useDispatch()

    

    const productsData = async () => {
      await axios
        .get(`http://localhost:4000/api/getProducts/`)

        .then((response) => {
          dispatch(setProducts(response.data));
        })
        .catch((err) => console.log(err));
    };

   const filterProductsByAgeGroup = (ageGroup) => {
     return products.filter((product) => product.ageGroup === ageGroup);
  };
  useEffect(() => {
      productsData();
    }, []);
    console.log(products);
  return (
    <div>
      <Routes>
        {/* <Route path="/men" element={<Men getProduct={getProduct} />} />
        <Route path="/women" element={<Women getProduct={getProduct} />} />
        <Route path="/kids" element={<Kids getProduct={getProduct} />} /> */}
        <Route
          path="/men"
          element={<Men products={filterProductsByAgeGroup("men")} />}
        />
        <Route
          path="/women"
          element={<Women products={filterProductsByAgeGroup("women")} />}
        />
        <Route
          path="/kids"
          element={<Kids products={filterProductsByAgeGroup("kids")} />}
        />
      </Routes>
    </div>
  );
};

export default Shop;
