import { Box, Typography } from "@mui/material";
import React from "react";
import FileIcon from "../../../assets/noun_description_192324.png";
import ProdIcon from "../../../assets/prodDes.png";
import OutlineIcon from "../../../assets/outline.png";

const Description = ({ description }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        justifyContent: "space-between",
        gap: "2rem",
        mb: "2rem"
      }}
    >
      <Box textAlign="center">
        <img src={FileIcon} alt="" />
        <Typography>Details and Product Description</Typography>
        <Typography>{description}</Typography>
      </Box>
      <Box textAlign="center">
        <img src={OutlineIcon} alt="" />
        <Typography variant="h6">Material(s) and care</Typography>
        <Typography>Body: 98% COTTON - 2% ELASTANE</Typography>
        <img src={ProdIcon} alt="" />
      </Box>
    </Box>
  );
};

export default Description;
