import { Box, Button, CircularProgress, Divider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { BUTTON } from "../Buttons/Buttons";
import Newsletter from "../NewsLetter/Newsletter";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetails from "./ProductDetails";
import Description from "./Routes/Description";
import Reviews from "./Routes/Reviews";
import { useDispatch, useSelector } from "react-redux";
import {  useGetSingleProductsQuery } from "../../features/productsApi";

const ProductInfo = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSingleProductsQuery(id);
  const [tabIndex, setTabIndex] = useState(1);

  const dispatch = useDispatch();



 



  console.log(data)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Box>
        {isLoading ? (
          <Box display="flex" justifyContent="center" padding="4rem">
            <CircularProgress />
          </Box>
        ) : (
          <ProductDetails {...data} key={id} />
        )}
      </Box>
      <Divider sx={{ m: "4rem 0" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <Button
          onClick={() => setTabIndex(1)}
          variant="outlined"
          className={tabIndex === 1 ? "active" : "disable"}
          sx={{
            height: "49px",
            maxWidth: "184px",
            width: "100%",
            cursor: "pointer",
            borderRadius: "2rem",
          }}
        >
          Description
        </Button>
        <Button
          onClick={() => setTabIndex(2)}
          variant="outlined"
          className={tabIndex === 2 ? "active" : "disable"}
          sx={{
            height: "49px",
            maxWidth: "184px",
            width: "100%",
            cursor: "pointer",
            borderRadius: "2rem",
          }}
        >
          Reviews
        </Button>
      </Box>
      <Box
        sx={{
          padding: "2rem",
          m: "2rem 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        }}
      >
        {tabIndex === 1 && <Description {...data} key={id} />}
        {tabIndex === 2 && <Reviews {...data} key={id} />}
      </Box>
      <Newsletter />
    </>
  );
};

export default ProductInfo;
