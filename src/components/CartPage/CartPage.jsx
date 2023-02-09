import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartCard from "../CartCard/CartCard";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);


  function createData(products, colors, size, quantity) {
    return { products, colors, size, quantity };
  }

  const rows = [createData( )];

  return (
    <Box sx={{ padding: "4rem 2rem" }}>
      {cart.cartItems.length === 0 ? (
        <Box>
          <Typography>Your Cart is Empty</Typography>
          <Link to="/">Go to Shop</Link>
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography>Products</Typography>
            <Typography>Colors</Typography>
            <Typography>Sizes</Typography>
            <Typography>Quantity</Typography>
          </Box>
          <Box>
            {cart.cartItems &&
              cart.cartItems.map(
                (items) => <CartCard {...items} />
                  
              )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
