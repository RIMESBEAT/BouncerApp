import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";

const Men = ({ data, isLoading }) => {
  cl
  return (
    <Box sx={{ padding: "4rem" }}>
      <Box>
        {isLoading ? (
          <Box display="flex" justifyContent="center" padding="4rem">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box>
              <Box>
                <Box>
                  <Typography>{}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(180px, 1fr))",
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
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Men;
