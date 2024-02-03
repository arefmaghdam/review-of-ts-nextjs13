import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const CreateSlice: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // the logic of redux toolkit is very similar to context, in both of redux toolkit and context we have a store to share datas
    // we want to create a slice in redux toolkit, for this task we create a folder named redux in root
    // into src/redux we create a folder named slices, one slice is a space that we should save a special data related to a special issue
    // we create a cartSlice.ts file for cart items count, also reducers are functions that update our states, cartSlice.ts codes:
    
    import {createSlice} from "@reduxjs/toolkit"

    export interface CartCount {
      value: numbers[];
    }
    
    const cartCountInitialState: CartCount = {
      value: []
    };
    
    const cartSlice = createSlice({
      name: 'cartSlice',
      initialState: cartCountInitialState,
      reducers: {
        addTpCart: (state, action) => {
          return {
            ...state,
            value: action.payload
          },
          removeFromCart: (state, action) => {
            return {
              ...state,
              value: action.payload
            };
          }
        }
      }
    });
    
    export const { addToCart, removeFromCart } = cartSlice.actions;
    export default cartSlice.reducer;
      `}
      />
    </div>
  );
};

export default CreateSlice;
