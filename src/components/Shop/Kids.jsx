import { Box, CircularProgress } from "@mui/material";
import React from "react";
import ShopCard from "../ShopCard/ShopCard";

const Kids = ({ data, isLoading }) => {
  return (
    <Box>
      <Box>
        {isLoading ? (
          <Box display="flex" justifyContent="center" padding="4rem">
            <CircularProgress />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
                padding: "2rem",
                justifyContent: "space-between", 
                gap: "2rem"

              
            }}
          >
            <Box
              sx={{ width: "300px", background: "red", height: "1000px" }}
            ></Box>
            <Box
              sx={{
                display: "grid",
                // gridTemplateColumns: {
                //   xs: "repeat(4)",
                //   sm: "1fr 1fr 1fr",
                // },
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                width: "100%",
                gap: "1rem",
              }}
            >
              {data &&
                data.map((item) => {
                  return <ShopCard {...item} key={item._id} />;
                })}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Kids;
