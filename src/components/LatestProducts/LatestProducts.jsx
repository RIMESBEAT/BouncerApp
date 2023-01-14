import { Box,  Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Button from "@mui/material-next/Button";


const LatestProducts = () => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    productsData();
  }, []);

  const productsData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")

      .then((response) => {
        setGetProduct(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        p: {
          xs: "4rem 1rem",
          sm: "4rem 2rem",
          md: "4rem 3rem",
        },
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center" m="2rem 0">
        Products In Today
        <Button
          color="tertiary"
          disabled={false}
          size="small"
          variant="elevated"
          placeholder="kingggggggg"
        />
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          gap: "1.5rem",
          border: " 2px solid red",
          width: "100%",
        }}
      >
        {getProduct &&
          getProduct.slice(0, 4).map((item) => {
            return <ProductCard {...item} />;
          })}
      </Box>
    </Box>
  );
};

export default LatestProducts;
