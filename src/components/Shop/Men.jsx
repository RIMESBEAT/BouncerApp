import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";

const Men = ({products}) => {

  return (
    <Box sx={{ padding: "4rem 0" }}>
      <Box></Box>
      <Box>
        <Box></Box>

        <Box>
          {products &&
            products.map((item) => {
              return <ShopCard {...item} key={item._id} />;
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Men;
