import { ActionTypes } from "../constants/actionTypes";
import {createSlice} from "@reduxjs/toolkit"

const intialState = {
  products: [],

};





export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    default: 
     return state
  }
}
export const getTotalReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TOTAL:
      let { totalAmount, totalCount } = state.products.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount
        cartTotal.totalAmount += itemTotal
        cartTotal.totalCount += amount
        return cartTotal
      },
        {
          totalAmount: 0,
          totalCount:0
        }
      
      
      )
      totalAmount = parseFloat(totalAmount.toFixed(2))
      return { ...state, totalAmount, totalCount }
    default: 
     return state
  }
}