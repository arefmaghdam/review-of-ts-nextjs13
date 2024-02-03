import { Reducer, createSlice } from "@reduxjs/toolkit";

export interface CartCount {
  value: number[];
}

const cartCountInitialState: CartCount = {
  value: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartCountInitialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
