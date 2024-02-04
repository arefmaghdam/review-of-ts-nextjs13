import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const AddToCart: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to develop addToCart reducer function:

    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existingItem = state.cartItems.find((product) => product.id === item.id)
            if(existingItem) {
                state.cartItems = state.cartItems.map((product) => product.id === existingItem.id ? item : product)
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            state.itemsPrice = state.cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.qty, 0 
            )
            state.totalPrice = state.itemsPrice
        }
    }
      `}
      />
    </div>
  );
};

export default AddToCart;
