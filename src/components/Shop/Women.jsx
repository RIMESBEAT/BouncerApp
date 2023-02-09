import { Box } from '@mui/material';
import React from 'react'
import ShopCard from '../ShopCard/ShopCard';
import CircularProgress from "@mui/material/CircularProgress";

const Women = ({ data, isLoading }) => {
  return (
    <Box>
      <Box></Box>
      <Box display="">
        <Box sx={{ maxWidth: "150px" }}></Box>

        <Box>
          {isLoading ? (
            <Box display="flex" justifyContent="center" padding="4rem">
              <CircularProgress />
            </Box>
          ) : (
            <Box display="flex">
              <Box></Box>
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
    </Box>
  );
};

export default Women