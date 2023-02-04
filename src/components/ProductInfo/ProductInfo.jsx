import { Box, Button, Divider, Typography } from "@mui/material";
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
import { selectedProductReducer } from "../../redux/reducers/productReducer";
import { selectedProduct } from "../../redux/actions/productsActions";

const ProductInfo = () => {
  const { id } = useParams();
  const [tabIndex, setTabIndex] = useState(1);

  const dispatch = useDispatch();
  const  product  = useSelector((state) => state.product);


  useEffect(() => {
    productsData();
  }, [id]);

  const productsData = async () => {
    await axios
      .get(`http://localhost:4000/api/getProduct/${id}`)

      .then((response) => {
        dispatch(selectedProduct(response.data));
      })
      .catch((err) => console.log(err));
  };



  return (
    <>
      <Box>
        <ProductDetails {...product} key={id} />
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
        {tabIndex === 1 && <Description {...product} />}
        {tabIndex === 2 && <Reviews {...product} />}
      </Box>
      <Newsletter />
    </>
  );
};

export default ProductInfo;
