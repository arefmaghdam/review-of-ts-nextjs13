import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
