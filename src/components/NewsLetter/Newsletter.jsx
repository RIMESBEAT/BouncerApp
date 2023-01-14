import { Box, Typography } from "@mui/material";
import React from "react";
import NewsBg from "../../assets/newsbg.png";
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
        <Typography variant="h6" fontWeight="bold" color="white">
          Subscribe to our newsletter and receive exclusive offers every week
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <input
            type="text"
            style={{
              height: "48px",
              maxWidth: "315px",
              width: "100%",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "1rem",
              borderRadius: "2rem",
              border: "none",
              outline: "none",
            }}
            placeholder="Enter your email"
          />
          <button
            style={{
              height: "48px",
              maxWidth: "119px",
              width: "100%",
                cursor: "pointer",
              borderRadius: "2rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              background: "var(--yellow)",
            }}
          >
            SUBSCRIBE
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
