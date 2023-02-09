import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

// export const getProducts = createAsyncThunk("api/getProducts", async (id = null, {rejectWithValue}) => {
//   try {
//     const response = await axios.get("http://localhost:4000/api/getProductks");
//   return response?.data;
//   } catch (error) {
//     return rejectWithValue(" an error occured")
// }
// });
export const getProducts = createAsyncThunk("api/getProducts", async () => {
  const response = await axios.get("http://localhost:4000/api/getProducts");
  return response?.data;
});

const productsSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      // immer library pls check
      state.status = "pending";
    },
    [getProducts.fulfilled]: (state, action) => {
      // immer library pls check
      state.status = "success";
      state.items = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      // immer library pls check
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
