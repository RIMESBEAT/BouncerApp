import { Box, Card, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import LatestProducts from "../LatestProducts/LatestProducts";
import Newsletter from "../NewsLetter/Newsletter";
import ProductSlider from "../ProductSlider/ProductSlider";
import TrustPage from "../Trust_Page/TrustPage";
import HomeBtn from "../../assets/roundedArrow.png";

import "./Home.css";
import zIndex from "@mui/material/styles/zIndex";
import TestOnly from "../TestOnly/TestOnly";
import UploadForm from "../TestOnly/UploadForm";
import { useGetAllProductsQuery } from "../../features/productsApi";
// import CounterComponent from "../../redux/features/Counter/CounterComponent";

const Home = () => {

  return (
    <>
      <Box className=" hero">
        <Box
          sx={{
            margin: "auto 0",
            display: "flex",
            alignItems: "center",
            height: "100%",
            padding: "4rem",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Typography
            sx={{
              fontSize: 50,
              width: 347,

              fontWeight: "bold",
              color: "white",
            }}
          >
            Sale of the summer collection
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            position: "absolute",
            bottom: "8rem",
            left: "4rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <img src={HomeBtn} alt="" />
          Shop Now
        </Box>
      </Box>
      <ProductSlider />
      <TrustPage />
      <LatestProducts />
      <Newsletter />
      <UploadForm/>
      {/* <TestOnly/> */}
      {/* <CounterComponent/> */}
    </>
  );
};

export default Home;
