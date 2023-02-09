import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";

const CartCard = ({
  imageUrl,
  description,
  title,
  price,
  _id,
  rating,
  category,
  colors,
  size,
  quantity,
  rows,
}) => {
  return (
    <Box key={_id}>
      <TableBody>
      
          <TableRow
            
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Box>
                <img src={imageUrl[0]} alt="" width="100" />
                <Typography>
                  {title.slice(0,10)}
                </Typography>
              </Box>
            </TableCell>
            <TableCell align="right">{colors}</TableCell>
            <TableCell align="right">{size}</TableCell>
            <TableCell align="right">{quantity}</TableCell>
          </TableRow>
 
      </TableBody>
    </Box>
  );
};

export default CartCard;
