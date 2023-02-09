import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity += 1;
        toast.info(
          `cart ${state.cartItems[itemIndex].title}  quantity increased  successfully`,
          {
            position: "top-center",
          }
        );
      } else {
        const tempProduct = {
          ...action.payload,
          cartTotalQuantity: 1,
          selectedColor: action.payload.colors,
        };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart successfully`, {
          position: "top-center",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1);
        toast.success(
          `${action.payload.title} removed from cart successfully`,
          {
            position: "top-center",
          }
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateCartQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity = action.payload.quantity;
        toast.info(
          `cart ${state.cartItems[itemIndex].title}  quantity updated  successfully`,
          {
            position: "top-center",
          }
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// const initialState = {
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );

//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].cartTotalQuantity += 1;
//         toast.info(
//           `cart ${state.cartItems[itemIndex].title}  quantity increased  successfully`,
//           {
//             position: "top-center",
//           }
//         );
//       } else {
//         const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
//         state.cartItems.push(tempProduct);
//         toast.success(`${action.payload.title} added to cart successfully`, {
//           position: "top-center",
//         });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions

// export default cartSlice.reducer
