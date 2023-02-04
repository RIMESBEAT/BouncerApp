import { Box, Typography } from "@mui/material";
import React from "react";
import NewsBg from "../../assets/newsbg.png";
import { BUTTON, INPUT } from "../Buttons/Buttons";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <Box className="newLetter">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          p: {
            xs: "4rem 1rem",
            sm: "4rem 2rem",
            md: "4rem 3rem",
          },
          gap: "2rem",
        }}
      >
        <Typography sx={{
          fontSize: {
            sm: "20px",
            md: "25px", 
            lg: "29px"
        }}} fontWeight="bold" color="white">
          Subscribe to our newsletter and receive exclusive offers every week
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
         <INPUT placeholder="Enter your email"/>
          <BUTTON>SUBSCRIBE</BUTTON>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
